
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./componentes/categories";
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
    const restaurant = await db.restaurant.findUnique({
        where: {slug},
        include:{
            menuCategories: {
                include:{products:true}
            }
        }
    });
    if(!restaurant){
        return notFound();
    }
    return (
        <div>
            <RestauranteHeader restaurant={restaurant}/>
            <RestaurantCategories restaurant={restaurant}/>
        </div>
    );
}
 
export default RestaurantMenuPage;