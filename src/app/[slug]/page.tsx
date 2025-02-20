import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-element-by-slug";

import ConsuptionMethodOption from "./components/comsuption-method-option";


interface RestaurantePageProps {
    params: Promise<{ slug: string }>;
}

const RestaurantePage = async({params}:RestaurantePageProps) => {
    const { slug } = await params;
    const restaurant = await getRestaurantBySlug(slug);
    if(!restaurant){
        return notFound();
    }
    return ( 
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
        {/* Logo e título */}
        <div className="flex flex-col items-center gap-2">
            <Image src={restaurant?.avatarImageURL} alt={restaurant?.name} width={82} height={82} />
            <h2 className="font-semibold">
                {restaurant?.name}
            </h2>
        </div>
        {/* Bem vindo */}
        <div className="pt-24 text-center space-y-2">
            <h3 className="text-2x-l font-semibold">Seja bem-vindo!</h3>
            <p className="opacity-55">Escolha como prefere aproveitar a sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe  
            </p>
        </div>  
        <div className="pt-14 grid grid-cols-2 gap-4">
            <ConsuptionMethodOption
                slug={slug}
                option="DINE_IN"
                buttonText="Pra comer aqui"
                imageAlt="Pra comer aqui"
                imageURL="/dine_in.png"
            />
            <ConsuptionMethodOption
                slug={slug}
                option="TAKEAWAY"
                buttonText="Pra levar"
                imageAlt="Pra levar"
                imageURL="/take_away.png"
            />
        </div>
    </div> );
}
 
export default RestaurantePage;