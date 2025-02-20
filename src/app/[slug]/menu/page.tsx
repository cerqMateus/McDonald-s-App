
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-element-by-slug";

import RestauranteHeader from "./componentes/header";

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
            <RestauranteHeader restaurant={restaurant}/>
        </div>
    );
}
 
export default RestaurantMenuPage;