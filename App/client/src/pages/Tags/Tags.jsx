import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import TagsList from './TagsList'
import './Tags.css'
import {
    Card,
    CardHeader,
    CardBody,
    Heading
} from '@chakra-ui/react'
import Navbar from '../../components/Navbar'


const Tags = () => {

    const tagsList = [{
        id: 1,
        tagName: "Civil Rights",
        tagDesc: "These include arbitrary arrest and detention, torture, extrajudicial killings, restrictions on freedom of speech, expression, assembly, and association, electoral fraud, discrimination based on race, gender, religion, or sexual orientation, and suppression of political opposition.",
    }, {
        id: 2,
        tagName: "Political Rights",
        tagDesc: "These include arbitrary arrest and detention, torture, extrajudicial killings, restrictions on freedom of speech, expression, assembly, and association, electoral fraud, discrimination based on race, gender, religion, or sexual orientation, and suppression of political opposition."
    }, {
        id: 3,
        tagName: "Social Rights",
        tagDesc: "These involve denial of access to education, healthcare, housing, food, clean water, and sanitation. It also includes forced labor, child labor, and unequal pay."
    }, {
        id: 4,
        tagName: "Cultural Rights",
        tagDesc: "These entail the suppression of cultural practices, languages, and traditions of particular groups or communities."
    }, {
        id: 5,
        tagName: "Economic Rights",
        tagDesc: "These involve denial of access to education, healthcare, housing, food, clean water, and sanitation. It also includes forced labor, child labor, and unequal pay."
    }, {
        id: 6,
        tagName: "Refugees and Migrants Rights",
        tagDesc: "These encompass denial of asylum, forced displacement, human trafficking, and exploitation of migrant workers."
    }, {
        id: 7,
        tagName: "Gender-Based",
        tagDesc: "This includes violence against women, girls, and LGBTQ+ individuals, such as domestic violence, sexual assault, female genital mutilation, forced marriage, and honor killings."
    }, {
        id: 8,
        tagName: "Environmental Rights",
        tagDesc: "These involve activities that harm the environment and subsequently affect human health and livelihoods, such as pollution, deforestation, and land grabbing."
    }, {
        id: 9,
        tagName: "Rights of Indigenous Peoples",
        tagDesc: "This includes dispossession of ancestral lands, cultural genocide, forced assimilation, and discrimination against indigenous communities."
    }, {
        id: 10,
        tagName: "Labor Rights",
        tagDesc: "These involve violations of workers' rights, such as unsafe working conditions, lack of fair wages, denial of collective bargaining rights, and child labor."
    }, {
        id: 11,
        tagName: "Freedom of Religion",
        tagDesc: "These involve persecution, discrimination, or restrictions imposed on individuals or groups based on their religious beliefs."
    }, {
        id: 12,
        tagName: "Access to Justice",
        tagDesc: "These include lack of impartial judicial systems, denial of fair trial rights, and impunity for perpetrators of human rights abuses."
    }]

    // return (
    //     <div className='home-container-1'>
    //         <LeftSidebar />
    //         <div className="home-container-2">
    //             <h1 className='tags-h1'>Tags</h1>
    //             <p className='tags-p'>A tag is a keyword or label that categorizes your rights Violation feed.</p>
    //             <p className='tags-p'>Using the right tags makes it easier for others to find and discuss about your feed.</p>
    //             <div className='tags-list-container'>
    //                 {
    //                     tagsList.map((tag) => (
    //                         <TagsList tag ={tag} key={tagsList.id}/>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <div>
            <Navbar />
        <div className="grid-container">
            <div className="left-column"><LeftSidebar /></div>
            <div className="main-column">
                <Card>
                    <CardHeader>
                        <Heading>Tags</Heading>
                    </CardHeader>
                    <CardBody>
                        <p>A tag is a keyword or label that categorizes your rights Violation feed.
                            Using the right tags makes it easier for others to find and discuss about your feed.
                        </p>
                        <div className='tags-list-container'>
                            {
                                tagsList.map((tag) => (
                                    <TagsList tag={tag} key={tagsList.id} />
                                ))
                            }
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="right-column"><RightSidebar /></div>
        </div>
        </div>
    )
}

export default Tags