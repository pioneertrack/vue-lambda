<template>
    <!-- Right Navbar fixed -->
    <nav class="rail-nav">
        <router-link class="icon-logo"
           :to="{path: '/dashboard'}"
           title="Logo">
            <svg width="43px" height="54px" viewBox="0 0 43 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>
                <path d="M22,50 C22.5535667,50 24.4578027,41.0441158 25,41 C35.2766363,40.1638439 42,32.4921283 42,22 C42,10.954305 33.045695,2 22,2 C10.954305,2 2,10.954305 2,22 C2,32.4388376 7.79791878,40.0897238 18,41 C18.5930937,41.0529185 21.3931426,50 22,50 Z" id="path-1"></path>
            </defs> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="none"><g id="SideMenu/Properties---Long" transform="translate(-14.000000, -16.000000)"><g id="Logo" transform="translate(14.000000, 16.000000)"><mask id="mask-2" fill="white"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#path-1"></use></mask> <use id="Mask" fill="#FFFFFF" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#path-1"></use> <image id="Icon" x="0.446153846" y="0.9" width="41.9384615" height="52.925" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="data:image/png;base64,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"></image></g></g></g></svg>
        </router-link>
            <!-- Right Navbar fixed -->
        <router-link to="/dashboard" class="icon" title="Dashboard">
            <svg width="28px" height="20px" viewBox="0 0 28 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Ready-for-Dev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Settings---Account-Profile" transform="translate(-22.000000, -89.000000)" fill="#EDEDED" fill-rule="nonzero">
                        <g id="SideMenu/Dashboard" transform="translate(22.000000, 89.000000)">
                            <path d="M18.48,0.731896312 C8.82,-2.36974673 0,4.82042578 0,14.1253549 C0,15.3942089 0.14,17.790933 0.56,19.2007708 C0.56,19.4827383 0.84,19.7647059 1.12,19.7647059 L26.74,19.7647059 C27.02,19.7647059 27.3,19.4827383 27.44,19.2007708 C27.72,17.790933 28,15.3942089 28,14.1253549 C28,8.06305259 24.22,2.56468538 18.48,0.731896312 Z M14,2.84665293 C14.84,2.84665293 15.4,3.41058803 15.4,4.25649068 C15.4,5.10239332 14.84,5.66632842 14,5.66632842 C13.16,5.66632842 12.6,5.10239332 12.6,4.25649068 C12.6,3.41058803 13.16,2.84665293 14,2.84665293 Z M4.2,15.5351926 C3.36,15.5351926 2.8,14.9712575 2.8,14.1253549 C2.8,13.2794523 3.36,12.7155172 4.2,12.7155172 C5.04,12.7155172 5.6,13.2794523 5.6,14.1253549 C5.6,14.9712575 5.04,15.5351926 4.2,15.5351926 Z M8.12,8.20403637 C7.56,8.76797146 6.72,8.76797146 6.16,8.20403637 C5.6,7.64010127 5.6,6.65321485 6.02,6.08927975 C6.58,5.52534465 7.42,5.52534465 7.98,6.08927975 C8.54,6.65321485 8.54,7.64010127 8.12,8.20403637 Z M14,16.9450304 C12.46,16.9450304 11.06,15.5351926 11.48,14.1253549 C11.9,12.7155172 14,8.48600391 14,8.48600391 C14,8.48600391 16.1,12.7155172 16.52,14.1253549 C16.94,15.5351926 15.54,16.9450304 14,16.9450304 Z M21.98,8.20403637 C21.42,8.76797146 20.58,8.76797146 20.02,8.20403637 C19.46,7.64010127 19.46,6.79419862 20.02,6.23026352 C20.58,5.66632842 21.42,5.66632842 21.98,6.23026352 C22.4,6.65321485 22.4,7.64010127 21.98,8.20403637 Z M23.8,15.5351926 C22.96,15.5351926 22.4,14.9712575 22.4,14.1253549 C22.4,13.2794523 22.96,12.7155172 23.8,12.7155172 C24.64,12.7155172 25.2,13.2794523 25.2,14.1253549 C25.2,14.9712575 24.64,15.5351926 23.8,15.5351926 Z" id="Dashboard"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </router-link>
        <router-link :to="{name: 'dashboard-properties-list'}" class="icon" title="Properties">
            <svg width="18px" height="29px" viewBox="0 0 18 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <!-- Generator: sketchtool 49 (51002) - http://www.bohemiancoding.com/sketch -->
                <defs></defs>
                <g id="Ready-for-Dev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Settings---Account-Profile" transform="translate(-27.000000, -142.000000)" fill="#EDEDED" fill-rule="nonzero">
                        <g id="SideMenu/Properties" transform="translate(27.000000, 142.000000)">
                            <path d="M17.7603404,2.12404005 C17.7603404,1.39842303 17.2003404,0.823529412 16.4747234,0.823529412 L1.4732766,0.823529412 C0.74706383,0.823529412 0.212680851,1.39842303 0.212680851,2.12404005 L0.212680851,28.3284656 L5.93659574,28.3284656 L5.93659574,23.999189 C5.93659574,23.5732315 6.24459574,23.2253166 6.66876596,23.2253166 L11.2982979,23.2253166 C11.7230638,23.2253166 12.0358298,23.5732315 12.0358298,23.999189 L12.0358298,28.3284656 L17.7591489,28.3284656 L17.7591489,2.12404005 L17.7603404,2.12404005 Z M7.92817021,19.4161252 C7.92817021,19.6645507 7.72740426,19.8659124 7.47838298,19.8659124 L4.76834043,19.8659124 C4.52051064,19.8659124 4.31855319,19.6645507 4.31855319,19.4161252 L4.31855319,16.7060826 C4.31855319,16.4576571 4.52051064,16.2556996 4.76834043,16.2556996 L7.47838298,16.2556996 C7.72740426,16.2556996 7.92817021,16.4576571 7.92817021,16.7060826 L7.92817021,19.4161252 Z M7.92817021,13.4414018 C7.92817021,13.6898273 7.72740426,13.891189 7.47838298,13.891189 L4.76834043,13.891189 C4.52051064,13.891189 4.31855319,13.6898273 4.31855319,13.4414018 L4.31855319,10.7313592 C4.31855319,10.4829337 4.52051064,10.281572 4.76834043,10.281572 L7.47838298,10.281572 C7.72740426,10.281572 7.92817021,10.4829337 7.92817021,10.7313592 L7.92817021,13.4414018 Z M7.92817021,7.3433592 C7.92817021,7.59178473 7.72740426,7.79314643 7.47838298,7.79314643 L4.76834043,7.79314643 C4.52051064,7.79314643 4.31855319,7.59178473 4.31855319,7.3433592 L4.31855319,4.63331665 C4.31855319,4.38489111 4.52051064,4.18352941 4.76834043,4.18352941 L7.47838298,4.18352941 C7.72740426,4.18352941 7.92817021,4.38489111 7.92817021,4.63331665 L7.92817021,7.3433592 Z M13.6538723,19.4161252 C13.6538723,19.6645507 13.4513191,19.8659124 13.2034894,19.8659124 L10.4934468,19.8659124 C10.2444255,19.8659124 10.0436596,19.6645507 10.0436596,19.4161252 L10.0436596,16.7060826 C10.0436596,16.4576571 10.2444255,16.2556996 10.4934468,16.2556996 L13.2034894,16.2556996 C13.4513191,16.2556996 13.6538723,16.4576571 13.6538723,16.7060826 L13.6538723,19.4161252 Z M13.6538723,13.4414018 C13.6538723,13.6898273 13.4513191,13.891189 13.2034894,13.891189 L10.4934468,13.891189 C10.2444255,13.891189 10.0436596,13.6898273 10.0436596,13.4414018 L10.0436596,10.7313592 C10.0436596,10.4829337 10.2444255,10.281572 10.4934468,10.281572 L13.2034894,10.281572 C13.4513191,10.281572 13.6538723,10.4829337 13.6538723,10.7313592 L13.6538723,13.4414018 Z M13.6538723,7.3433592 C13.6538723,7.59178473 13.4513191,7.79314643 13.2034894,7.79314643 L10.4934468,7.79314643 C10.2444255,7.79314643 10.0436596,7.59178473 10.0436596,7.3433592 L10.0436596,4.63331665 C10.0436596,4.38489111 10.2444255,4.18352941 10.4934468,4.18352941 L13.2034894,4.18352941 C13.4513191,4.18352941 13.6538723,4.38489111 13.6538723,4.63331665 L13.6538723,7.3433592 Z" id="Properties"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </router-link>
        <router-link  to="/dashboard/map" class="icon" title="Map">
            <svg width="30px" height="28px" viewBox="0 0 30 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Ready-for-Dev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Settings---Account-Profile" transform="translate(-21.000000, -205.000000)" fill="#EDEDED" fill-rule="nonzero">
                        <g id="SideMenu/Map-View" transform="translate(21.000000, 205.000000)">
                            <path d="M20.8107529,18.1221878 C26.0133176,18.8429838 29.6470588,20.8728385 29.6470588,23.0590594 C29.6470588,25.5144162 24.5551765,28 14.8235294,28 C5.09188235,28 0,25.5144162 0,23.0590594 C0,20.8728385 3.63374118,18.8429838 8.83630588,18.1221878 C9.10757647,18.082079 9.35265882,18.3122687 9.38477647,18.6313953 C9.4164,18.9499406 9.22270588,19.2394216 8.95192941,19.276624 C3.75578824,19.9962575 0.988235294,21.9354314 0.988235294,23.0590594 C0.988235294,24.6366727 6.25157647,26.8374257 14.8235294,26.8374257 C23.3954824,26.8374257 28.6588235,24.6366727 28.6588235,23.0590594 C28.6588235,21.9354314 25.8912706,19.9962575 20.6951294,19.276624 C20.4243529,19.2394216 20.2306588,18.9505219 20.2622824,18.6313953 C20.2939059,18.3122687 20.5389882,18.0832415 20.8107529,18.1221878 Z M14.8235294,0 C19.8185428,0 23.8822552,3.88004747 23.8823529,8.64924721 C23.8823529,14.5679732 15.7755933,23.2570088 15.4304408,23.6240139 C15.1068329,23.9681627 14.5408122,23.9687691 14.216618,23.6240139 C13.8714655,23.2570088 5.76470588,14.5679732 5.76470588,8.64924721 C5.76470588,3.88004747 9.82846714,0 14.8235294,0 Z M14.8235548,13.1764706 C17.4400053,13.1764706 19.5686275,11.1446258 19.5686275,8.6470831 C19.5686275,6.14954042 17.4400053,4.11764706 14.8235548,4.11764706 C12.2071044,4.11764706 10.0784314,6.14949187 10.0784314,8.64703455 C10.0784314,11.1445772 12.2070535,13.1764706 14.8235548,13.1764706 Z" id="Map-View"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </router-link>
        <router-link :to="{name: 'dashboard-event-notifications'}" class="icon" title="Notifications">
            <svg width="26px" height="29px" viewBox="0 0 26 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs></defs>
                <g id="Ready-for-Dev" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Settings---Account-Profile" transform="translate(-23.000000, -266.000000)" fill="#EDEDED">
                        <g id="SideMenu/Notifications-None" transform="translate(23.000000, 266.000000)">
                            <path d="M15.5739723,25.1719274 C15.67233,25.4560237 15.7255804,25.759859 15.7255804,26.075623 C15.7255804,27.6582245 14.3879354,28.9411765 12.7378667,28.9411765 C11.0877979,28.9411765 9.75015294,27.6582245 9.75015294,26.075623 C9.75015294,25.759859 9.80340337,25.4560237 9.9017611,25.1719274 L0,25.1719274 L0,23.7754457 C0.659103792,23.1836605 1.36863806,22.4160441 1.93693581,21.4613829 C4.07559355,17.8443609 2.82808217,15.8399462 3.66872011,9.14767418 C4.42026679,3.14878371 9.11115899,1.43144021 11.5171684,0.941176471 L13.9618386,0.941176471 C16.3644964,1.43144021 21.0553886,3.14885847 21.8086501,9.14767418 C22.649288,15.843086 21.4017767,17.8443609 23.5404344,21.4613829 C24.1053805,22.4160441 24.8182664,23.1836605 25.4756554,23.7754457 L25.4756554,25.1719274 L15.5739723,25.1719274 Z" id="Notifications"></path>
                        </g>
                    </g>
                </g>
            </svg>
        </router-link>
        <div class="dropright">
            <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="../../assets/images/user.png" alt="User" class="img-fluid mask">
            </a>
            <ul class="dropdown-menu">
                <li>
                    <a href="https://weathercheck.co/terms/" class="fa fa-fw fa-btn fa-sign-out" title="Terms of Use">Terms of Use</a>
                    <router-link to="/logout" class="fa fa-fw fa-btn fa-sign-out" title="Logout">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Sidemenu',
}
</script>

<style>
    .rail-nav {
        background-image: -webkit-gradient(linear, left top, left bottom, from(#24283e), to(#004380));
        background-image: linear-gradient(#24283e, #004380);
        position: fixed;
        left: 0;
        width: 72px;
        height: 100vh;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding-top: 16px;
    }

    .rail-nav .icon {
        display: block;
        width: 72px;
        height: 72px;
        margin-bottom: 10px;
        text-align: center;
    }

    .rail-nav svg {
        display: inline-block;
        margin-top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        max-width: 36px;
    }

    .rail-nav .icon.active path,
    .rail-nav .icon:hover path {
        fill: #8EC549;
    }
    .rail-nav .icon-logo:hover path{
        fill: #ffffff;
    }
    .icon-logo{
        display: block;
        width: 72px;
        height: 72px;
        margin-bottom: 10px;
        text-align: center;
    }
    .my-submenu{ left:73px !important; top:-20px;}
    .parent-submenu:hover ul.dropdown-menu.my-submenu {
        display: block;
    }
    .parent-submenu{width:100%; margin-right:0;bottom:0;position:absolute}
    .parent-submenu li{display: block;width:100%}
    .parent-submenu li a{text-align: center;padding: 0;}
    .parent-submenu li a img{display: inline-block;margin: 0;}
    .nav.parent-submenu li a:hover{background-color:transparent}
    .my-submenu{}
    .my-submenu li span{position: absolute;
        left: -9px;
        bottom: 9px;
        width: 0;
        height: 0;
        border-top: 9px solid transparent;
        border-right: 9px solid #fff;
        border-bottom: 9px solid transparent;
    }
    .dropright{
        bottom: 50px;
        position: absolute;
        text-align: center;
        width: 100%;
    }
    .navbar-left{
        background-image: -webkit-gradient(linear, left top, left bottom, from(#24283e), to(#004380));
        background-image: linear-gradient(#24283e, #004380);
        height: calc(100% - 68px);
        left: 0;
        padding-top: 20px;
        position: fixed;
        top: 68px;
        width: 72px;
        z-index: 9;
    }

    .navbar-left .icon {
        display: block;
        width: 72px;
        height: 72px;
        margin-bottom: 10px;
        text-align: center;
    }
    .navbar-left svg {
        display: inline-block;
        margin-top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        max-width: 36px;
    }
    .navbar-left .icon.active path,
    .navbar-left .icon:hover path {
        stroke: #79bfe8;
    }
    .navbar-left .dropright{
        bottom: 50px;
        position: absolute;
        text-align: center;
        width: 100%;
    }
    .navbar-left .dropdown-toggle img{
        border: 2px solid #d3e0e9;
        border-radius: 50%;
        display: inline-block;
        padding: 2px;
        height: 50px;
        width: 50px;
    }
    .navbar-left .dropright .dropdown-toggle::after{
        display: none;
    }
    .mask {
        border-radius: 50%;
        box-sizing: border-box;
        height: 43px;
        width: 43px;
        border: 3px solid #8EC549;
    }
</style>
