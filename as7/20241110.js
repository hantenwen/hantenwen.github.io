$(function() {
    const videoSections = [
        { element: $('#video1').get(0), section: $('#video-section-1') },
        { element: $('#video2').get(0), section: $('#video-section-2') }
    ];

    $(window).on('scroll', function() {
        videoSections.forEach(({ element, section }) => {
            if (isInViewport(section)) {
                const sectionHeight = section.height();
                const scrollPosition = $(window).scrollTop() - section.offset().top;
                const progress = Math.min(1, Math.max(0, scrollPosition / sectionHeight));
                if (element.duration) {
                    element.currentTime = element.duration * progress;
                    if (element.paused) element.play();
                }
            } else {
                element.pause();
            }
        });
    });

    function isInViewport($el) {
        const elementTop = $el.offset().top;
        const elementBottom = elementTop + $el.outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }
});
