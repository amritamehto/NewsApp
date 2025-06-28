import React, { Component } from 'react';
import NewsItems from './NewsItems';

export class News1 extends Component {
    constructor() {
        super();
        this.state = {
            articles: [
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Tami Luhby",
                    "title": "How Trump’s immigration plans could affect care for your elderly parents",
                    "description": "Terry Hodge would have a tough time caring for the 150 or so elderly women at Bethany Health Care Center without the dozens of immigrant nursing assistants, housekeepers, dietary aides and other staffers at the Framingham, Massachusetts, facility.",
                    "url": "https://www.cnn.com/2025/01/21/economy/nursing-homes-immigration-policy-trump/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1386512410.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2025-01-21T10:00:57Z",
                    "content": "Terry Hodge would have a tough time caring for the 150 or so elderly women at Bethany Health Care Center without the dozens of immigrant nursing assistants, housekeepers, dietary aides and other staf… [+6497 chars]"
                },
                {
                    "source": {
                        "id": "cbc-news",
                        "name": "CBC News"
                    },
                    "author": "CBC News",
                    "title": "Drugs like Ozempic could also curb addictions — but they might boost other health risks, study suggests | CBC News",
                    "description": "Ozempic was first approved to treat diabetes in Canada seven years ago. Now the largest study of its kind suggests it and other medications like it have a host of other potential health benefits beyond obesity, but could also bring increased risk of other con…",
                    "url": "http://www.cbc.ca/news/health/ozempic-glp-1-nature-medicine-1.7436069",
                    "urlToImage": "https://i.cbc.ca/1.7078322.1704811601!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_1180/novo-nordisk-india-wegovy.JPG?im=Resize%3D620",
                    "publishedAt": "2025-01-21T09:07:20.0462667Z",
                    "content": "Ozempic was first approved to treat diabetes in Canada seven years ago. Now the largest study of its kind suggests it and other medications like it have a host of other potential health benefits beyo… [+4150 chars]"
                },
                {
                    "source": {
                        "id": "medical-news-today",
                        "name": "Medical News Today"
                    },
                    "author": "Yasemin Nicola Sakay",
                    "title": "Want to improve brain health? Here are 12 questions to ask your doctor",
                    "description": "An article in the medical journal Neurology lists specific questions people should ask their neurologist or primary care physicians to asses and improve their brain health.",
                    "url": "https://www.medicalnewstoday.com/articles/how-to-improve-brain-health-12-questions-to-ask-doctor",
                    "urlToImage": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2025/01/brain-health-collage-1200-628-facebook.jpg",
                    "publishedAt": "2025-01-21T09:00:00Z",
                    "content": "<ul><li>The American Academy of Neurology recently released a 12-question brain health checklist.</li><li>The list encourages individuals to ask their doctors more questions to improve their brain he… [+6606 chars]"
                },
                {
                    "source": {
                        "id": "breitbart-news",
                        "name": "Breitbart News"
                    },
                    "author": "Elizabeth Weibel",
                    "title": "Trump Signs Executive Order Withdrawing from World Health Organization",
                    "description": "President Donald Trump signed an executive order to withdraw the United States from the World Health Organization (W.H.O.).",
                    "url": "https://www.breitbart.com/politics/2025/01/20/trump-signs-executive-order-withdrawing-u-s-world-health-organization/",
                    "urlToImage": "https://media.breitbart.com/media/2025/01/Donald-Trump-signs-executive-order-withdrawl-who-1-20-25-getty-640x335.jpg",
                    "publishedAt": "2025-01-21T03:15:56Z",
                    "content": "President Donald Trump signed an executive order to withdraw the United States from the World Health Organization (W.H.O.).\r\nAs Trump was seen signing the executive order, he spoke about how under hi… [+1726 chars]"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "BBC News",
                    "title": "Trump orders US to leave World Health Organization",
                    "description": "Trump has long been critical of how the Geneva-based institution handled the Covid-19 pandemic.",
                    "url": "https://www.bbc.co.uk/news/articles/c391j738rm3o",
                    "urlToImage": "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/df26/live/e948f4b0-d79b-11ef-a509-47d0593086b1.jpg",
                    "publishedAt": "2025-01-21T02:37:19.983598Z",
                    "content": "Carrying out this executive action on day one makes it more likely the US will formally leave the global agency. \r\n\"They wanted us back so badly so we'll see what happens,\" Trump said in the Oval Off… [+551 chars]"
                },
                {
                    "source": {
                        "id": "usa-today",
                        "name": "USA Today"
                    },
                    "author": "Eduardo Cuevas",
                    "title": "Trump orders United States to exit WHO again. Health experts warn of danger.",
                    "description": "The day-one executive order fulfills a campaign promise. Health experts worry it puts US health at risk.",
                    "url": "https://www.usatoday.com/story/news/health/2025/01/20/trump-orders-us-exit-world-health-organization/77772989007/",
                    "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/12/06/USAT/76821599007-20210406-t-000000-z-554280923-rc-2-dqm-947-e-03-rtrmadp-3-healthcoronaviruswho.JPG?crop=4733,2662,x0,y289&width=3200&height=1800&format=pjpg&auto=webp",
                    "publishedAt": "2025-01-21T01:38:18+00:00",
                    "content": "NEW YORK President Donald Trump is pulling the U.S. out of the World Health Organization for a second time, the White House announced late Monday. \r\nThe day-one executive order fulfills Trump's campa… [+5869 chars]"
                },
                {
                    "source": {
                        "id": "next-big-future",
                        "name": "Next Big Future"
                    },
                    "author": "Brian Wang",
                    "title": "Sepsis Breakthrough | NextBigFuture.com",
                    "description": "Researchers at Oregon Health & Science University have uncovered how a molecule found on certain bacteria may drive blood clotting in sepsis, a",
                    "url": "https://www.nextbigfuture.com/2025/01/sepsis-breakthrough.html",
                    "urlToImage": "https://nextbigfuture.s3.amazonaws.com/uploads/2025/01/sepsisfix.jpg",
                    "publishedAt": "2025-01-20T20:19:12Z",
                    "content": "Researchers at Oregon Health &amp; Science University have uncovered how a molecule found on certain bacteria may drive blood clotting in sepsis, a life-threatening condition that causes about 8 mill… [+4494 chars]"
                },
                {
                    "source": {
                        "id": "gruenderszene",
                        "name": "Gruenderszene"
                    },
                    "author": null,
                    "title": "Mehr Wachstum für SaaS-Plattformen mit integrierten Zahlungen",
                    "description": "SaaS-Unternehmen aus Branchen wie Mobilität, Health oder Entertainment stehen unter Druck, effizient zu skalieren. Eingebettete Zahlungsoptionen können helfen.",
                    "url": "https://www.businessinsider.de/gruenderszene/sponsored-post/mehr-wachstum-fuer-saas-plattformen-mit-integrierten-zahlungen-mollie/",
                    "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2024/11/mollie-saas-plattformen-integrierte-zahlungen-artikelbild.jpg?ver=1732867659",
                    "publishedAt": "2025-01-20T10:15:00+00:00",
                    "content": "SaaS-Unternehmen aus Branchen wie Mobilität, Health oder Entertainment stehen unter Druck, effizient zu skalieren. Eingebettete Zahlungsoptionen können dabei eine entscheidende Rolle spielen.Die Skal… [+2231 chars]"
                },
                {
                    "source": {
                        "id": "medical-news-today",
                        "name": "Medical News Today"
                    },
                    "author": "Yasemin Nicola Sakay",
                    "title": "Brain health, sleep, diet: 3 health resolutions for 2025",
                    "description": "In this podcast episode, Medical News Today shares three actionable resolutions that can help improve brain, heart, and metabolic health in the new year via diet, sleep, and exercise.",
                    "url": "https://www.medicalnewstoday.com/articles/brain-health-sleep-diet-3-health-resolutions-for-2025",
                    "urlToImage": "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2024/12/facebook-in_convo-2025-res-1200x628.jpg",
                    "publishedAt": "2024-12-24T11:11:00Z",
                    "content": "Taking care of oneself requires a multi-faceted approach: brain, heart, and metabolic health. What research in 2024 has shown us is that improving our health in these areas comes down to three main f… [+2384 chars]"
                },
                {
                    "source": {
                        "id": "recode",
                        "name": "Recode"
                    },
                    "author": "Celia Ford",
                    "title": "Phones and mental health: What if an app can tell you if you’re depressed?",
                    "description": "Emerging apps like MoodCapture use AI to guess when you’ll be sad. Can they also help you feel better?",
                    "url": "https://www.vox.com/future-perfect/24150430/depression-detection-technology-ai-tests-apps-mental-health",
                    "urlToImage": "https://cdn.vox-cdn.com/thumbor/sKqyLa2kPkjuiUjAhCZcLqm3CvQ=/0x0:4590x2403/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25435888/681977094.jpg",
                    "publishedAt": "2024-05-07T11:30:00Z",
                    "content": "If you have a sore throat, you can get tested for a host of things Covid, RSV, strep, the flu and receive a pretty accurate diagnosis (and maybe even treatment). Even when youre not sick, vital signs… [+15415 chars]"
                },
                {
                    "source": {
                        "id": "the-irish-times",
                        "name": "The Irish Times"
                    },
                    "author": "Jennifer Bray",
                    "title": "Abortion rules should be relaxed, review to recommend",
                    "description": "Minister for Health Stephen Donnelly considering report by barrister Marie O’Shea which examined operation of the existing law",
                    "url": "https://www.irishtimes.com/ireland/social-affairs/2023/03/29/review-calls-for-abortion-law-to-be-relaxed/",
                    "urlToImage": "https://www.irishtimes.com/resizer/DycgF-s39PfaIVo4cOhhhNhDjqM=/1200x630/filters:format(jpg):quality(70):focal(1109x649:1119x659)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YVVSZCLNN6CW4NWJKGEPUSEAPE.jpg",
                    "publishedAt": "2023-03-29T04:15:00Z",
                    "content": "A new review of the States abortion law is set to recommend a loosening of existing rules which could involve the removal of the three-day wait to access medication.\r\nMinister for Health Stephen Donn… [+2934 chars]"
                },
                {
                    "source": {
                        "id": "the-globe-and-mail",
                        "name": "The Globe And Mail"
                    },
                    "author": "Wency Leung",
                    "title": "‘COVID hasn’t gone away’: Five things health experts say we must do to end the pandemic",
                    "description": "Boosting health care capacity, encouraging third doses and better understanding long COVID are among the issues health experts say need to be addressed",
                    "url": "https://www.theglobeandmail.com/canada/article-covid-19-pandemic-not-over/",
                    "urlToImage": "https://www.theglobeandmail.com/resizer/nYUYq7AN4xv1_6tgavE1CKi6OvQ=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/OSOQKLUMCZEDDPFOKUWLUFOLFY.png",
                    "publishedAt": "2022-06-15T17:00:00Z",
                    "content": "Restaurants are open. Festivals are back. Masks, for the most part, are optional. And starting Monday, June 20, proof of vaccination will no longer be required of Canadian air and train passengers.\r\n… [+7848 chars]"
                }
            ],
        };
    }
    render() {
        return (
            <>
                <div className='container'>
                    < div className='row'>
                        {this.state.articles.map((element) => {
                            // console.log(ele)
                            return (
                                <div className='col-md-4' key={element.url}>
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>)
                        })}
                    </div>

                </div>
            </>
        )
    }
}

export default News1
