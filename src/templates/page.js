import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeBanner from '../components/HomeBanner'
import ChampionCard from '../components/ChampionCard'
import BannerModule from '../components/BannerModule'
import BannerBelow from '../components/BannerBelow'
import CoFounder from '../components/CoFounder'
import MapLocations from '../components/MapLocations'
import Statistics from '../components/Statistics'
import Movie from '../components/Movie'
import Cinema from '../components/Cinema'
import AboutCinema from '../components/AboutCinema'
import Summerschoolprogram from '../components/Summerschoolprogram'
import ContactModule from '../components/ContactModule'
// import GroupAge from "../components/GroupAge"

const Page = ({ data }) => {
  const {
    moduleList: { modulesList },
  } = data.wpgraphql.page

  return (
    <Layout>
      {modulesList.length > 0 &&
        modulesList.map(layout => {
          { console.log(layout) }
          switch (layout.__typename) {

            case "WPGraphQL_Page_Modulelist_ModulesList_HomeBanner":
              return (
                <div>
                  <HomeBanner
                    title={layout.bannerTitle}
                    subtitle={layout.bannerSubTitle}
                  />
                </div>
              )
              case "WPGraphQL_Page_Modulelist_ModulesList_Bannermodule":
                return (
                  <div>
                    <BannerModule
                      age = {layout.age}
                      bannerTitle ={layout.bannerTitle}
                      buttonText = {layout.buttonText}
                      name = {layout.name}
                      bannerImage ={layout.bannerImage.sourceUrl}
                      contactMessage = {layout.contactMessage}
                      telephone = {layout.telephone}
                      studentBacground = {layout.studentBackgroundImage.sourceUrl}
                    />
                  </div>
              )
              case "WPGraphQL_Page_Modulelist_ModulesList_Bannerbelow":
                return(
                  <div>
                    <BannerBelow
                    moto = {layout.moto}
                    contactParagraph= {layout.contactParagraph}
                    background = {layout.background.sourceUrl}
                    buttonLink = {layout.buttonLink.url}
                    contactFormShortcode = {layout.contactFormShortcode}
                    textColor = {layout.textColor}
                    />

                  </div>
                )
              case "WPGraphQL_Page_Modulelist_ModulesList_Championcard":
                return(
                  <div>
                    <ChampionCard
                      test = {layout.test}
                      // cardTitle = {card.layout.cardTitle}
                      // backgroundColor = {card.layout.backgroundColor}
                      // card = {card.layout.map(a =>{
                      //   console.log("Champion Card: " + a)
                      // })}
                      // card = {layout.card[
                      //   backgroundColor,
                      //   cardTitle
                      // ]}
                      

                      />
                  </div>
                )
              case "WPGraphQL_Page_Modulelist_ModulesList_Cofounder":
                return(
                  <div>
                    <CoFounder
                      hanaPicture = {layout.hanaQerimiPicture.sourceUrl}
                      hanaStory= {layout.hanaQerimiStory}
                      darsejPicture= {layout.darsejRizajPicture.sourceUrl}
                      darsejStory= {layout.darsejRizajStory}
                    />
                  </div>
                )
              case "WPGraphQL_Page_Modulelist_ModulesList_Maplocations":
                return(
                  <div>
                    <MapLocations
                      mapImage = {layout.mapImage.sourceUrl}
                      title = {layout.title}
                      paragraph = {layout.paragraph}                    
                    />
                  </div>
                )
              case "WPGraphQL_Page_Modulelist_ModulesList_Statistics":
                return(
                <div>
                  <Statistics
                    firstNumber = {layout.firstNumber}
                    secondNumber = {layout.secondNumber}
                    thirdNumber = {layout.thirdNumber}
                    fourthNumber = {layout.fourthNumber}
                    fifthNumber = {layout.fifthNumber}                 
                    sixthNumber = {layout.sixthNumber}
                    mobileBackground = {layout.mobileBackground.sourceUrl}
                   />                  
                </div>
              )
              case "WPGraphQL_Page_Modulelist_ModulesList_Movie":
                return(
                  <div>
                    <Movie
                      movie = {layout.movie}
                     />
                  </div>
                )
              case "WPGraphQL_Page_Modulelist_ModulesList_Cinema":
                return(
                  <div>
                    <Cinema
                    aboutCinema = {layout.aboutCinema}
                    cinemaImg = {layout.cinemaShot.sourceUrl}
                    cinemaImgAlt = {layout.cinemaShot.altText}
                     />
                  </div>
                )
                case "WPGraphQL_Page_Modulelist_ModulesList_Aboutcinema":
                  return(
                    <div>
                      <AboutCinema
                      title = {layout.title}
                      rightSideText = {layout.rightSideText}
                      leftSideText = {layout.leftSideText}
                      />
                    </div>
                  )
                case "WPGraphQL_Page_Modulelist_ModulesList_Summerschoolprogram":
                  return(
                    <div>
                      <Summerschoolprogram
                      aboutProgram = {layout.aboutProgram}
                      sectionOne = {layout.sectionOne}
                      sectionTwo = {layout.sectionTwo}
                      sectionThree = {layout.sectionThree}
                      sectionFour = {layout.sectionFour}
                      sectionFive = {layout.sectionFive}
                      sectionSix = {layout.sectionSix}
                      elements = {layout.elements}
                      />
                    </div>
                  )
                case "WPGraphQL_Page_Modulelist_ModulesList_Contactmodule":
                  return(
                    <div>
                      <ContactModule
                      email = {layout.email}
                      />
                    </div>
                  )

            }
        })}
    </Layout >
  );
}
export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
  wpgraphql {
    page(id: $id) {
      moduleList {
        modulesList {
        ... on WPGraphQL_Page_Modulelist_ModulesList_HomeBanner {
            bannerSubTitle
            bannerTitle
          }
        ... on WPGraphQL_Page_Modulelist_ModulesList_Bannermodule {
            age
            bannerTitle
            buttonText
            name
            bannerImage {
              sourceUrl
            }
            contactMessage
            telephone
            studentBackgroundImage {
              sourceUrl
            }
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Bannerbelow {
            moto
            contactParagraph
            contactParagraphMobile
            contactFormShortcode
            background {
              srcSet
              sourceUrl
            }
            buttonLink {
              url
              title
              target
            }
            textColor
          }
        ... on WPGraphQL_Page_Modulelist_ModulesList_Championcard {
            test
            card {
              backgroundColor
              cardTitle
              apliko {
                url
                target
                title
              }
              meShume {
                url
                target
                title
              }
            }
          } 
          ... on WPGraphQL_Page_Modulelist_ModulesList_Cofounder {
            hanaQerimiStory
            darsejRizajStory
            darsejRizajPicture {
              sourceUrl
              srcSet
            }
            hanaQerimiPicture {
              srcSet
              sourceUrl
            }
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Maplocations {
            fieldGroupName
            paragraph
            title
            mapImage {
              srcSet
              sourceUrl
            }
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Statistics {
            fifthNumber
            firstNumber
            fourthNumber
            secondNumber
            sixthNumber
            thirdNumber
            mobileBackground {
              sourceUrl
              srcSet
            }
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Movie {
            movie
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Cinema {
            aboutCinema
            cinemaShot {
              sourceUrl
              altText
            }
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Aboutcinema {
            title
            rightSideText
            leftSideText
          }
          ... on WPGraphQL_Page_Modulelist_ModulesList_Summerschoolprogram {
            aboutProgram
            sectionOne
            sectionTwo
            sectionThree
            sectionFour
            sectionFive
            sectionSix
            elements {
              text
            }
          }     
          ... on WPGraphQL_Page_Modulelist_ModulesList_Contactmodule {
            email
          }    
        }
      }
    }
  }
}

`
