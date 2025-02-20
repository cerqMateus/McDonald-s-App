import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-element-by-slug";

interface RestaurantMenuPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ consuptionMethod: string }>;
}


const isConsuptionMethodValid = (consuptionMethod: string) => {
    return["DINE_IN","TAKEAWAY"].includes(consuptionMethod.toUpperCase());
}

const RestaurantMenuPage = async ({params, searchParams} : RestaurantMenuPageProps) => {
    const {slug} = await params;
    const {consuptionMethod} = await searchParams;
    if(!isConsuptionMethodValid(consuptionMethod)){
        return notFound();
    }
    const restaurant = await getRestaurantBySlug(slug);
    if(!restaurant){
        return notFound();
    }
    return (
        <div>
            <div className="relative h-[250px] w-full">
                <Image
                    src={restaurant?.avatarImageURL}
                    alt={restaurant?.name}
                    fill
                    className="object-cover"    
                ></Image>
            </div>
        </div>
    );
}
 
export default RestaurantMenuPage;