import React from 'react'
import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    useColorModeValue,
    Link,
    Heading
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const WidgetTags = () => {

    const tags = ["Civil Rights", "Political Rights", "Social Rights", "Cultural Rights", "Economic Rights", "Refugees and Migrants Rights", "Gender-Based", "Environmental Rights", "Rights of Indigenous Peoples", "Labor Rights", "Freedom of Religion", "Access to Justice"]

    const bg = useColorModeValue("white", "#1A202C");
    const borderColor = useColorModeValue("gray.300", "#2D3748");
    const {t} = useTranslation('common');
    return (
        <Flex
        style={{marginTop:'20px'}}
            direction="column"
            bg={bg}
            borderRadius={4}
            cursor="pointer"
            border="1px solid"
            borderColor={borderColor}
        >
            <Flex
                align="flex-end"
                color="white"
                p="6px 10px"
                bg="blue.500"
                height="70px"
                borderRadius="4px 4px 0px 0px"
                fontWeight={600}
                bgImage="url(/images/recCommsArt.png)"
                backgroundSize="cover"
                bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
        url('images/xw6wqhhjubh31.webp')"
            >
                <h3>{t('app.rightsidebar.toptags')}</h3>
            </Flex>
            <Flex className='widget-tags-div'>
                {(
                    <>
                        {
                            tags.map((tag) => (


                                <Link>
                                <p key={tag}>{tag}</p>
                                </Link>


                            ))
                        }


                        
                    </>
                )}
            </Flex>
        </Flex>
    );

    // return (
    //     <div className='widget-tags'>
    //         <h4>Watched Tags</h4>
    //         <div className='widget-tags-div'>
    //             {
    //                 tags.map((tag) => (
    //                  <p key ={tag}>{tag}</p>

    //                 ))
    //             }

    //         </div>

    //     </div>
    // )
}

export default WidgetTags