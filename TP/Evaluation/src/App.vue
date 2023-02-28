<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>
    <Header />

    <router-view></router-view>

    <Footer />

</template>



<style lang="scss" >

//********** Global **********//

$accent-color: #032541;

body {
    margin: 0;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
}

// Tendances

.tendances-container {
    margin-top: 40px;
}

.grid-tendances {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}


// Populaires

.wrapper-pop {
    display: flex;
    justify-content: center;
    background-color: rgba(128, 128, 128, 0.192);
    padding-top: 30px;
    margin-bottom: 30px;
}

//********** Page Focus **********//

// Banner

.focus-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner {
        background: url("@/assets/images/Spiderman/bg.png");
        padding: 40px 0px;
        width: 100%;
        display: flex;
        justify-content: center;

        .content {
            width: 80%;
            max-width: 1400px;
            display: grid;
            grid-template-columns: 1fr 3fr;
            place-content: center;
            grid-gap: 30px;

            .right {
                width: 68%;

                h1,
                h2,
                p,
                span,
                .score {
                    color: white;
                }

                .top {
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;

                    h1 {
                        font-size: 1.5em;
                    }

                    .score {
                        margin-right: 20px;
                        height: 63px;
                        width: 63px;
                        background-color: $accent-color;
                        border-radius: 50%;
                        border: solid 2px white;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 500;
                    }
                }

                .synopsis {
                    h2 {
                        margin-bottom: 20px;
                    }
                }
            }
        }
    }
}

// Casting

.focus-container {
    .casting {
        width: 83%;
        max-width: 1380px;
        margin-top: 40px;
        margin-bottom: 100px;

        h2 {
            margin-bottom: 40px;
            font-size: 36px;
            font-weight: 400;
        }

        .actors {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .actor {
                margin-bottom: 30px;

                img {
                    transition: all 0.3s;
                    margin-bottom: 10px;
                }

                &:hover {
                    img {
                        box-shadow: rgba(0, 0, 0, 0.55) 8px 8px 5px;
                    }
                }
            }
        }
    }
}



//********** Responsive **********//

@media screen and (max-width: 1151px) {
    .search-container {
        background-position-y: -1px;
    }

    .focus-container {
        .banner {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            .content {
                grid-template-columns: 1fr;

                .right {
                    width: 100%;
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .desktop-nav {
        display: none;
    }

    .mobile-nav {
        display: flex;
    }

    .search-container {
        background-position-y: -10px;
    }

    #mobileNav {
        display: flex;
    }

    .focus-container {
        .banner {
            padding-top: 120px;
        }
    }
}

@media screen and (max-width: 560px) {
    .title-tendances {
        flex-direction: column;
        text-align: center;

        h2 {
            margin-bottom: 20px;
        }

        button {
            margin-bottom: 20px;
        }
    }

    .search-container {
        height: 200px;
        align-items: flex-end;
        margin-bottom: 40px;
        background: white;
    }

    .tendances-container {
        margin-top: 0px;
    }

    .grid-tendances {
        margin-top: 10px;
        justify-content: center;
    }

    .focus-container {
        .top {
            display: block !important;

            .score {
                margin-bottom: 20px;
            }
        }

        .casting {
            .actors {
                justify-content: center;

                .actor {
                    width: 80%;

                    img {
                        width: 100%;
                    }

                    h4 {
                        font-size: 1.6em;
                    }

                    span {
                        font-size: 1.1em;
                    }
                }
            }
        }
    }
}
</style>