"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestauranteHeaderProps{
    restaurant: Pick<Restaurant, 'name'|'coverImageURL'>
}

const RestauranteHeader = ({restaurant} : RestauranteHeaderProps) => {
    const router = useRouter();
    const handleBackClick = ()=>router.back();
    return ( 
        <div className="relative h-[250px] w-full">
                <Button 
                variant="secondary" 
                size="icon" 
                className="absolute top-4 left-4 rounded-full z-50"
                onClick={handleBackClick}
                >   
                    <ChevronLeftIcon/>
                </Button>
                <Image
                    src={restaurant.coverImageURL}
                    alt={restaurant?.name}
                    fill
                    className="object-cover"    
                ></Image>
                <Button variant="secondary" size="icon" className="absolute top-4 right-4 rounded-full z-50">
                    <ScrollTextIcon/>
                </Button>
            </div>
     );
}
 
export default RestauranteHeader;