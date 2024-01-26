<template>
    <header 
    :class="{
        'header pt-7 pt-md-5': true, 
        'header--exclusion': !isBeyondFold && headerExclusion,
        'header--beyond-fold': isBeyondFold,
        'header--page-scrolling-up': isBeyondFold && !isScrollingDown,
        'header--hide': isBeyondFold && isScrollingDown,
        'header--default': headerIsForcedDefault
        }"
    >
        <div class="container">
            <div class="row header__main-wrapper">
                <div class="header__logo-wrapper col-4">
                    <NuxtLink to="/" @click="closeHeader">
                        <svg class="header__logo" viewBox="0 0 123 26" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.44352 25.0877H0.000732422V10.3348L7.44352 7.87573V25.0877ZM12.4064 0.5H2.48215L17.3692 15.2529V25.0877H24.812V12.7939L12.4064 0.5ZM43.8947 25.0819C43.6843 24.7096 43.52 23.9786 43.402 22.8889C42.1824 24.6296 40.2346 25.5 37.5584 25.5C35.5638 25.5 33.974 25.0234 32.7888 24.0702C31.6037 23.117 31.0111 21.7904 31.0111 20.0906C31.0111 16.8119 33.3342 14.9401 37.9803 14.4751L40.7273 14.231C41.642 14.114 42.299 13.8986 42.6983 13.5848C43.0976 13.271 43.2973 12.8002 43.2973 12.1725C43.2973 11.405 43.0435 10.8406 42.5404 10.4795C42.0374 10.1184 41.1847 9.94006 39.9867 9.94006C38.6973 9.94006 37.7709 10.155 37.2073 10.5848C36.6437 11.0146 36.3148 11.7529 36.2203 12.7997H31.855C32.1146 8.70614 34.8375 6.65936 40.0236 6.65936C45.0691 6.65936 47.5918 8.46247 47.5918 12.0687V21.6623C47.5918 23.2442 47.8377 24.384 48.3294 25.0819H43.8947ZM41.9946 21.2266C42.862 20.4703 43.2963 19.383 43.2973 17.9649V16.326C42.8734 16.6974 42.181 16.941 41.2201 17.057L38.8257 17.3363C37.6514 17.4766 36.8124 17.75 36.3088 18.1564C35.8053 18.5629 35.553 19.1477 35.552 19.9108C35.552 20.6789 35.8161 21.2778 36.3443 21.7076C36.8724 22.1374 37.6292 22.3523 38.6147 22.3523C39.9985 22.3572 41.1251 21.982 41.9946 21.2266ZM62.1661 0.5H66.6023V25.0819H62.3077V22.576C60.9701 24.5253 59.0572 25.5 56.5689 25.5C54.0579 25.5 52.0747 24.6394 50.6191 22.9181C49.1438 21.1979 48.4061 18.9186 48.4061 16.0804C48.4061 13.1974 49.1438 10.9069 50.6191 9.20906C52.0511 7.51218 54.0343 6.66326 56.5689 6.66228C59.01 6.66228 60.8757 7.58138 62.1661 9.41959V0.5ZM57.5927 21.8713C59.0493 21.8713 60.199 21.3713 61.0419 20.3713C61.8651 19.3713 62.2762 17.941 62.2753 16.0804C62.2743 14.2198 61.8632 12.7895 61.0419 11.7895C60.2197 10.7934 59.069 10.2953 57.5898 10.2953C56.1587 10.2953 55.0277 10.8187 54.1966 11.8655C53.3655 12.9123 52.9485 14.366 52.9456 16.2266C52.9456 18.0863 53.3567 19.4932 54.1789 20.4474C55.0011 21.4016 56.1381 21.8762 57.5898 21.8713H57.5927ZM77.0664 25.5C74.2958 25.5 72.0662 24.6394 70.3775 22.9181C68.6632 21.2203 67.8066 18.941 67.8076 16.0804C67.8085 13.2198 68.6632 10.9405 70.3716 9.24269C72.0603 7.52242 74.2899 6.66179 77.0605 6.66082C79.8311 6.65984 82.0602 7.50877 83.748 9.2076C85.4386 10.9064 86.2835 13.1969 86.2825 16.0789C86.2825 18.9172 85.4376 21.1964 83.748 22.9167C82.0583 24.6369 79.8286 25.498 77.059 25.5H77.0664ZM80.5333 20.3553C81.3673 19.3416 81.7839 17.9167 81.7829 16.0804C81.7819 14.2442 81.3654 12.8197 80.5333 11.807C79.6944 10.7992 78.5363 10.2953 77.059 10.2953C75.5818 10.2953 74.4257 10.7934 73.5907 11.7895C72.7586 12.7895 72.3421 14.2198 72.3411 16.0804C72.3401 17.941 72.7566 19.3713 73.5907 20.3713C74.4247 21.3713 75.5808 21.8713 77.059 21.8713C78.5373 21.8713 79.6929 21.366 80.5259 20.3553H80.5333ZM103.498 9.2076C104.952 10.9298 105.679 13.2203 105.679 16.0789C105.679 18.9172 104.952 21.1964 103.498 22.9167C102.019 24.6389 100.036 25.5 97.5477 25.5C94.9906 25.5 93.0545 24.5 91.7396 22.5V25.0819H87.4848V0.5H91.9107V9.41813C93.202 7.57992 95.0796 6.66082 97.5433 6.66082C100.034 6.66082 102.018 7.50975 103.498 9.2076ZM96.4929 21.8713C97.9475 21.8713 99.0973 21.3484 99.9421 20.3026C100.763 19.2792 101.174 17.8255 101.174 15.9415C101.174 14.1033 100.769 12.7018 99.9598 11.7368C99.1504 10.7719 97.9947 10.2914 96.4929 10.2953C95.0176 10.2953 93.8674 10.7953 93.0422 11.7953C92.217 12.7953 91.8064 14.2256 91.8104 16.0863C91.8104 17.9712 92.2328 19.4016 93.0776 20.3772C93.8733 21.3733 95.0117 21.8713 96.4929 21.8713ZM118.566 25.0877C118.354 24.7154 118.189 23.9844 118.072 22.8947C116.852 24.6316 114.904 25.5 112.228 25.5C110.234 25.5 108.644 25.0234 107.459 24.0702C106.274 23.117 105.683 21.7909 105.688 20.0921C105.688 16.8134 108.012 14.9415 112.659 14.4766L115.405 14.2325C116.319 14.1155 116.976 13.9001 117.375 13.5863C117.775 13.2724 117.974 12.8017 117.974 12.174C117.974 11.4069 117.722 10.8426 117.218 10.481C116.713 10.1194 115.862 9.93957 114.665 9.94152C113.375 9.94152 112.448 10.1564 111.884 10.5863C111.321 11.0161 110.992 11.7544 110.899 12.8012H106.526C106.785 8.7076 109.507 6.66082 114.693 6.66082C119.739 6.66082 122.262 8.46394 122.262 12.0702V21.6637C122.262 23.2456 122.507 24.3855 122.999 25.0833L118.566 25.0877ZM116.664 21.2325C117.534 20.4761 117.968 19.3889 117.967 17.9708V16.326C117.544 16.6974 116.852 16.941 115.89 17.057L113.496 17.3363C112.323 17.4766 111.484 17.75 110.979 18.1564C110.473 18.5629 110.221 19.1477 110.222 19.9108C110.222 20.6789 110.486 21.2778 111.014 21.7076C111.542 22.1374 112.299 22.3523 113.285 22.3523C114.673 22.3572 115.8 21.982 116.664 21.2266V21.2325Z"/>
                        </svg>
                    </NuxtLink>
                </div>
                <nav class="header__large col-8">
                    <ul class="header__links callout-text">
                        <li 
                        @click="toogleServicesDropdown" 
                        :class="{
                            'header__link header__link--services': true, 
                            'header__link--open': isServicesDropdownOpen,
                        }">
                            <div class="header__label-wrapper">Services</div>
                            <div class="header__icon-wrapper">
                               <svg class="header__dropdown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.7 7.1">
                                    <polygon points="6.4 7.1 0 .7 .7 0 6.4 5.6 12 0 12.7 .7 6.4 7.1"/>
                                </svg>
                            </div>
                        </li>
                        <li class="header__link">
                            <NuxtLink to="/studio" @click="closeHeader">Le studio</NuxtLink>
                        </li>
                        <li class="header__link">
                            <NuxtLink to="/realisations" @click="closeHeader">Réalisations</NuxtLink>
                        </li>
                        <li class="header__link">
                            <NuxtLink to="/blog" @click="closeHeader">Blog</NuxtLink>
                        </li>
                        <li class="header__link">
                            <NuxtLink to="/faq" @click="closeHeader">FAQ</NuxtLink>
                        </li>
                        <li class="header__link">
                            <NuxtLink to="/jobs" @click="closeHeader">Jobs</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact" @click="closeHeader">
                                <Button text="Contact" :class="headerCTAButtonClass"></Button>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <nav class="header__mobile header-mobile col-8">
                    <div class="header-mobile__toogler-wrapper" @click="toogleMobileMenu">
                        <div class="header-mobile__toogle-label header-mobile__toogle-label--menu title-h4">Menu</div>
                        <div class="header-mobile__toogle-label header-mobile__toogle-label--close title-h5">Fermer</div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <HeaderServicesDropdown
        :headerState="headerState" 
        :services="services"
        @backdrop-click="closeHeader" 
        @animation-open-complete="dropdownOpenAnimationComplete"
        @animation-close-complete="dropdownCloseAnimationComplete">
    </HeaderServicesDropdown>
    <HeaderMobileMenu
        :headerState="mobileMenuState" 
        :services="services"
        @animation-open-complete="mobileMenuOpenAnimationComplete"
        @animation-close-complete="mobileMenuCloseAnimationComplete">
    >
    </HeaderMobileMenu>
</template>

<script setup>
    const isBeyondFold = ref(false)
    const isScrollingDown = ref(false)
    const isClickable = ref(true)
    const headerState = ref("open")
    const isMobileMenuClickable = ref(true)
    const mobileMenuState = ref("open")
    const headerIsForcedDefault = ref(false)
    const headerExclusion = useHeaderExclusion()
    const startHidePosition = ref(0)
    const currentScrollPosition = ref(0)
    const {data: services }  = await useFetch('/api/header')

    const props = defineProps({
        isExclusionOnStart: Boolean,
    })
    
    onMounted(() => {
        startHidePosition.value = window.innerHeight/2;
        window.addEventListener("scroll", onScroll)
    })
    onBeforeUnmount(() => {
        window.removeEventListener("scroll", onScroll)
    })

    function onScroll(){
        isScrollingDown.value = (currentScrollPosition.value < window.scrollY);
        isBeyondFold.value = (window.scrollY > startHidePosition.value);
        currentScrollPosition.value = window.scrollY;
    }

    /* SERVICES DROPDOWN */
    // Header toogler
    function toogleServicesDropdown(){
        if(isClickable.value && headerState.value == "open"){
            openHeader()
        }
        else if(isClickable.value && headerState.value == "close"){   
            closeHeader()
        }
    }
    // open Services Dropdown
    function openHeader(){
        headerIsForcedDefault.value = true
        isClickable.value = false;
        headerState.value = "opening";
    }
    // close Services Dropdown
    function closeHeader(){
        headerIsForcedDefault.value = false
        isClickable.value = false;
        headerState.value = "closing";
    }
    
    // open Services Dropdown Animation
    function dropdownOpenAnimationComplete(){
        isClickable.value = true;
        headerState.value = "close";
    }
    // close Services Dropdown Animation
    function dropdownCloseAnimationComplete(){
        isClickable.value = true;
        headerState.value = "open";
    }
    /* END SERVICES DROPDOWN */
    
    /* MOBILE MENU */
    // MobileMenu toogler
    function toogleMobileMenu(){
        if(isMobileMenuClickable.value && mobileMenuState.value == "open"){
            openMobileMenu()
        }
        else if(isMobileMenuClickable.value && mobileMenuState.value == "close"){   
            closeMobileMenu()
        }
    }
    // open MobileMenu
    function openMobileMenu(){
        headerIsForcedDefault.value = true
        isMobileMenuClickable.value = false;
        mobileMenuState.value = "opening";
    }
    // close Mobile Menu
    function closeMobileMenu(){
        headerIsForcedDefault.value = false
        isMobileMenuClickable.value = false;
        mobileMenuState.value = "closing";
    }
    // open mobile menu Animation
    function mobileMenuOpenAnimationComplete(){
        isMobileMenuClickable.value = true;
        mobileMenuState.value = "close";
    }
    // close mobile menu Animation
    function mobileMenuCloseAnimationComplete(){
        isMobileMenuClickable.value = true;
        mobileMenuState.value = "open";
    }
    /* END SERVICES DROPDOWN */

    const headerCTAButtonClass = computed(() => {
        const baseClass = `button--small`;

        if(headerIsForcedDefault.value) return `${baseClass}`;
        if(!isBeyondFold.value && headerExclusion.value) return `${baseClass} button--white`;

        return baseClass;
    })

    const isServicesDropdownOpen = computed(() => headerState.value == 'close')
</script>

<style scoped lang="scss">
.header {
    --header-color: var(--brand-secondary);
    $root:&;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: var( --z-index-nav);
    color:  var(--header-color);
    transition: padding .5s var(--alias-default-ease) .2s, 
                opacity .5s var(--alias-default-ease) .2s,
                color .5s var(--alias-default-ease) .2s,
                background-color .5s var(--alias-default-ease) .2s,
                transform .5s var(--alias-default-ease) .2s;

    &--exclusion {
        --header-color: var(--brand-primary)
    }
    &--default {
        --header-color: var(--brand-secondary);
    }
    &--page-scrolling-up {
        background-color: var(--brand-primary);
    }
    &--hide {
        transform: translateY(-100%);
    }
    
    & a {
        color: var(--header-color);
        transition: color .5s var(--alias-default-ease) .2s;
    }
    &__logo-wrapper {
        margin-top: auto;
        margin-bottom: auto;
        height: 100%;
        max-height: var(--r-space-sm);
        transition: max-height .5s var(--alias-default-ease) .2s;
    }
    &__logo {
        height: 100%;
        fill: currentColor;
    }
    &__links {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    &__link {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        cursor: pointer;
        transition: opacity .3s var(--alias-default-ease); 

        &:hover {
            opacity: 0.6;
        }

        &--open {
            #{$root}__icon-wrapper {
                transform: rotate(180deg);
            }
        }
    }
    &__icon-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        max-width: var(--r-space-xs);
        margin-left: var(--r-space-xs);
        transition: transform 1s var(--alias-default-ease); 
    }
    &__dropdown-icon{
        width: 100%;
        fill: currentColor;
    }
    // Mobile
    &-mobile {
        display: none;
        align-items: center;
        justify-content: flex-end;

        &__toogler-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: flex-end;
            overflow: hidden;
        }
        &__toogle-label {
            &--close {
                position: absolute;
                top: 100%;
            }
        }
    }
}

@media screen and (min-width: 992px){
    .header {
        $root:&;
        &--beyond-fold {
            padding-top: var(--r-space-xs);
            padding-bottom: var(--r-space-xs);

            #{$root}__logo-wrapper {
                max-height: var(--r-space-xs-2);
            }
        }
    }
}
@media screen and (max-width: 991px){
    .header {
        &__large {
            display: none;
        }
        &__mobile {
            display: flex;
        }
        &__logo-wrapper {
            max-height: var(--r-space-md);
        }
    }
}

</style>