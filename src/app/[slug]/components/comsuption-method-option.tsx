import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsuptionMethodOptionProps {
    imageURL: string;
    imageAlt: string;
    buttonText: string;
    option: ConsumptionMethod;
    slug: string; 
}

const ConsuptionMethodOption = ({imageAlt,imageURL,buttonText,option,slug} : ConsuptionMethodOptionProps) => {
    return ( 

        <Card>
            <CardContent className="flex flex-col items-center gap-8 py-8">
                <div className="relative h-[80px] w-[80px]">
                    <Image
                     src={imageURL} 
                     fill 
                     alt={imageAlt} 
                     className="object-contain"></Image>
                    </div>
                    <Button variant="secondary" className="rounded-full">
                        <Link href={`/${slug}/menu?consuptionMethod=${option}`}>
                            {buttonText}
                    </Link>    
                        </Button>    
          </CardContent>
        </Card>  

     );
}
 
export default ConsuptionMethodOption;