export  function music() {

    // 音乐播放
    function autoPlayMusic() {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
            musicPlay(true);
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);

        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            musicPlay(true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                musicPlay(true);
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    function musicPlay(isPlay) {
        var audio = document.getElementById('musicid');

        if (isPlay && audio.paused) {
            audio.play();
            console.log("自动播放了")
        }
        if (!isPlay && !audio.paused) {
            audio.pause();
            console.log("播放了暂停")
        }
    }
    autoPlayMusic();
}
