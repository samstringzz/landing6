import React from 'react';
import useToggle from '../../Hooks/useToggle.js';
import BlogHomeOne from '../HomeOne/BlogHomeOne.jsx';
import FaqHomeOne from '../HomeOne/FaqHomeOne.jsx';
import FeaturesHomeOne from '../HomeOne/FeaturesHomeOne.jsx';
import FooterHomeSeven from './FooterHomeSeven.jsx';
import ProjectHomeOne from '../HomeOne/ProjectHomeOne.jsx';
import TeamHomeOne from '../HomeOne/TeamHomeOne.jsx';
import CounterArea from '../HomeTwo/CounterArea.jsx';
import DownloadHomeTwo from '../HomeTwo/DownloadHomeTwo.jsx';
import PricingHomeTwo from '../HomeTwo/PricingHomeTwo.jsx';
import Drawer from '../Mobile/Drawer.jsx';
import HeaderHomeSeven from './HeaderHomeSeven.jsx';
import HeroHomeSeven from './HeroHomeSeven.jsx';
import GalleryHomeSeven from './GalleryHomeSeven.jsx';
import EventHomeSeven from './EventHomeSeven.jsx';
import TaglineHomeSeven from './TaglineHomeSeven.jsx';
import ServicesHomeSeven from './ServicesHomeSeven.jsx';
import TestimonialHomeSeven from './TestimonialHomeSeven.jsx';
import ProductHomeSeven from './ProductHomeSeven.jsx';
import NewsletterHomeSeven from './NewsletterHomeSeven.jsx';
import ContactHomeSeven from './ContactHomeSeven.jsx';

function HomeSeven() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHomeSeven action={drawerAction.toggle} />
            <HeroHomeSeven />
            <GalleryHomeSeven />
            <EventHomeSeven />
            <TaglineHomeSeven />
            <ServicesHomeSeven />
            <TestimonialHomeSeven />
            <ProductHomeSeven />
            <NewsletterHomeSeven />
            <ContactHomeSeven />
            <FooterHomeSeven />
        </>
    );
}

export default HomeSeven;
