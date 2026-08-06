/**
*
* --------------------------------------------------------------------
*
* Template : RSAddon Plugin Js
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* --------------------------------------------------------------------
*
**/
(function($) {
    "use strict";  
    // magnificPopup init
    
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();         
    });

    if ($('.js-tilt').length) {
        $('.js-tilt').tilt({})
    }

    $.fn.skillBars = function(options) {
        var settings = $.extend({
            from: 0,
            to: false,
            speed: 1000,
            interval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null,
            classes: {
                skillBarBar: '.skillbar-bar.style-horizontal',
                skillBarBarVarti: '.skillbar-bar.style-vertical',
                skillBarBarcir: '.thiscir',
                skillBarPercent: '.skill-bar-percent',
            }
        }, options);
        return this.each(function() {
            var obj = $(this),
                to = (settings.to != false) ? settings.to : parseInt(obj.attr('data-percent'));
            if (to > 100) {
                to = 100;
            };
            var from = settings.from,
                loops = Math.ceil(settings.speed / settings.interval),
                increment = (to - from) / loops,
                loopCount = 0,
                animated = false;
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && !animated) {
                        animateBars();
                        animated = true;
                    }
                });
            }, { threshold: 0.5 });
    
            observer.observe(obj[0]);

            function animateBars() {
                var strokdash = 294;
                var interval = setInterval(updateValue, settings.interval);
                obj.find(settings.classes.skillBarBar).animate({
                    width: parseInt(obj.attr('data-percent')) + '%'
                }, settings.speed);
                obj.find(settings.classes.skillBarBarVarti).animate({
                    height: parseInt(obj.attr('data-percent')) + '%'
                }, settings.speed);
                obj.find(settings.classes.skillBarBarcir).animate({
                    strokeDashoffset: strokdash - (strokdash * parseInt(obj.attr('data-percent'))) / 100
                }, settings.speed);
                function updateValue() {
                    from += increment;
                    loopCount++;
                    $(obj).find(settings.classes.skillBarPercent).text(from.toFixed(settings.decimals) + '%');
                    if (typeof(settings.onUpdate) == 'function') {
                        settings.onUpdate.call(obj, from);
                    }
                    if (loopCount >= loops) {
                        clearInterval(interval);
                        from = to;
                        if (typeof(settings.onComplete) == 'function') {
                            settings.onComplete.call(obj, from);
                        }
                        obj.addClass('animation-complete');
                    }
                }
            }
        });
    };
    
    var portfolioBlurImg = $('.rs-portfolios-grid.glass-effect-yes .portfolio-item');
    if (portfolioBlurImg.length) {
        portfolioBlurImg.each(function() {
            var increment = null;
            var displacementMap = $(this).find('feDisplacementMap');
            function startCounter(targetValue) {
                clearInterval(increment);
                var count = parseInt(displacementMap.attr('scale'));
                var step = targetValue > count ? 1 : -1;
                increment = setInterval(function() {
                    count += step;
                    displacementMap.attr('scale', count);
                    if ((step > 0 && count >= targetValue) || (step < 0 && count <= targetValue)) {
                        clearInterval(increment);
                    }
                }, 5);
            }
            $(this).mouseenter(function() { startCounter(50); });
            $(this).mouseleave(function() { startCounter(0); });
        });
    };

    // RS Link Anything Start
        function rs_link_isValidAbsoluteURL( string ) {
            try {
                const newUrl = new URL( string );
                return newUrl.protocol !== 'javascript:';
            } catch (err) {
                return false;
            }
        }
        function rs_link_isValidURL( string ) {
            try {
                let elm = document.createElement('input');
                elm.setAttribute('type', 'url');
                elm.setAttribute('required', 'true');
                elm.value = string;
                return elm.validity;
            } catch ( err ) {
                return false;
            }
        }
        var rsPageBody = $('body');
        rsPageBody.on('click.onWrapperLink', '[data-rs-element-link]', function(e) {
            var $wrapper = $(this),
                data     = $wrapper.data('rs-element-link'),
                id       = $wrapper.data('id'),
                anchor   = document.createElement('a'),
                anchorReal,
                timeout;
                
            if ( 'undefined' === typeof data.url ) {
                
                return false;
            }

            let url = encodeURI( data.url )
            , validUrl = rs_link_isValidURL( url );
            
            if ( validUrl.badInput === false
                && validUrl.customError === false
                && validUrl.patternMismatch === false
                && validUrl.rangeOverflow === false
                && validUrl.rangeUnderflow === false
                && validUrl.stepMismatch === false
                && validUrl.tooLong === false
                && validUrl.tooShort === false
                && validUrl.typeMismatch === true
                && validUrl.valid === false
                && validUrl.valueMissing === false ) {
                
                url = document.location.href.replace('#', '') + url;
                
                validUrl = rs_link_isValidURL( url );
            }
            else {
                
                validUrl = rs_link_isValidAbsoluteURL( url );
            }
            
            if ( ( 'undefined' !== typeof validUrl.valid 
                && validUrl.valid === false ) || validUrl === false ) {
                
                e.preventDefault();
                e.stopPropagation();
                
                return false;
            }
            
            anchor.id            = 'rs-link-anything-' + id;
            anchor.href          = url;
            anchor.target        = data.is_external ? '_blank' : '_self';
            anchor.rel           = data.nofollow ? 'nofollow noreferer' : '';
            anchor.style.display = 'none';

            document.body.appendChild(anchor);

            anchorReal = document.getElementById(anchor.id);
            anchorReal.click();

            timeout = setTimeout(function() {
                if (document.body.contains(anchorReal)) {
                    document.body.removeChild(anchorReal);
                }
                clearTimeout(timeout);
            });
        });
        // RS Link Anything End
})(jQuery);  