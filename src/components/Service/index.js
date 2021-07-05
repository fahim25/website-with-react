import React from 'react';

const Services = () =>{
    return(
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesImg src={Icon1} />
                    <ServicesTitle>Reduce Expenses</ServicesTitle>
                    <ServicesDesc>We help reduce your fees and increase your overall revenue.</ServicesDesc>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={Icon2} />
                    <ServicesTitle>Vitual Offices</ServicesTitle>
                    <ServicesDesc>We help reduce your fees and increase your overall revenue.</ServicesDesc>
                </ServicesCard>
                <ServicesCard>
                    <ServicesImg src={Icon3} />
                    <ServicesTitle>Premium Benefits</ServicesTitle>
                    <ServicesDesc>We help reduce your fees and increase your overall revenue.</ServicesDesc>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;