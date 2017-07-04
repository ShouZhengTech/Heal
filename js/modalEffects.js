/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init(initTgt) {

		var overlay = document.querySelector( '.md-overlay'),
            overlayListener,
            vidSizeListener;

        // Either init all md-triggers, or reinit specific target
        var tgt = initTgt ? document.getElementsByClassName(initTgt): document.querySelectorAll( '.md-trigger' );

        // Create reusable functions outside loop
        var emptyIframe = function(el,modal) {
            if (
                (modal.getAttribute('data-iframesrc')) ||
                (modal.id == 'vid-modal' && el.getAttribute( 'data-videosrc' ))
            ) {
                modal.querySelector('.md-content').innerHTML = '';
            }
        },
        removeModal = function(el,modal,hasPerspective) {
            classie.remove( modal, 'md-show' );
            emptyIframe(el,modal);
            if( hasPerspective ) {
                classie.remove( document.documentElement, 'md-perspective' );
            }
        },
        removeModalHandler = function(el,modal) {
            //emptyIframe(el,modal);
            removeModal(el,modal,classie.has(el, 'md-setperspective'));
        },
        // Helper for resizing video
        vidSize = function(aspectRatio){
            var bodyWidth = document.body.offsetWidth,
                vid = document.getElementById('vidModal');

            vid.style.width = bodyWidth + 'px';
            vid.style.height = bodyWidth * aspectRatio.w + 'px';

            if (((bodyWidth * aspectRatio.w) + 30) >= window.innerHeight) {
                vid.style.height = (bodyWidth * aspectRatio.w) - ((bodyWidth * aspectRatio.w) - window.innerHeight) - 50 + 'px';
                vid.style.width = ((bodyWidth * aspectRatio.w) - ((bodyWidth * aspectRatio.w) - window.innerHeight) - 50) * aspectRatio.h + 'px';
            }
        };

		[].slice.call( tgt ).forEach( function( el, i ) {

			// Ensure element has a unique classname for use in reinit
            if (el.className.match(/modalEffect_[\d]+/) === null) {
                el.className += ' modalEffect_'+i+' ';
                el.setAttribute('data-reinit','modalEffect_'+i);
            }

            var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) );
						console.log(el);
						console.log(modal);
				var close = modal.querySelector( '.md-close' );
                //closeLink = modal.querySelector('.md-content');
                //closeLink = modal.querySelectorAll('.md-link');

			var elClickListener = function( ev ) {
                // Pause background video while modal is open
                var theVideo = document.getElementById('theVideo');
                if (theVideo) {
                    theVideo.pause();
                }

                // Prepare vars for creating iframe when needed
                var iframe, iframesrc,
                    aspectRatio = {w:1,h:1};

                // If iframe is to be created, set iframe and common attributes
                if (
                    (modal.getAttribute( 'data-iframesrc' )) ||
                    (modal.id == 'vid-modal' && el.getAttribute( 'data-videosrc' ))
                ) {
                    iframe = document.createElement("IFRAME");
                    emptyIframe(el,modal);
                    iframe.setAttribute("frameborder", 0);

                    // If element is launching standard iframe
                    if (modal.getAttribute( 'data-iframesrc' ) ) {
                        iframe.id = modal.getAttribute( 'data-iframeid' );
                        iframesrc = modal.getAttribute( 'data-iframesrc' );
                        iframe.style.width = modal.getAttribute( 'data-iframewidth' );
                        iframe.style.height = modal.getAttribute( 'data-iframeheight' );
                    }

                    // If element is launching iframe video
                    if (modal.id == 'vid-modal' && el.getAttribute( 'data-videosrc' ) ) {
                        iframe.id = 'vidModal';
                        iframesrc = el.getAttribute( 'data-videosrc' ) + '?rel=0&autoplay=1&controls=0&showinfo=0&modestbranding=1';
                        iframe.style.width = '500px';
                        iframe.style.height = '282px';
                        iframe.setAttribute("class", 'vid-modal-size');
                    }

                    iframe.setAttribute("src", iframesrc);
                    modal.querySelector('.md-content').appendChild(iframe);

                    // If element is launching iframe video, set initial video size and add resize listener
                    if (modal.id == 'vid-modal' && el.getAttribute( 'data-videosrc' ) ) {
                        // Prepare aspect ratio for video size
                        aspectRatio.w = 0.5626; //282/500;
                        aspectRatio.h = 1.778; //500/282

                        // Unbind any existing vidSize listener, then bind new one
                        window.removeEventListener('resize', vidSizeListener);
                        vidSizeListener = function(){ vidSize(aspectRatio); };
                        window.addEventListener('resize', vidSizeListener);

                        // Set initial size
                        vidSizeListener();
                    }
                }

                // Finish opening modal
                classie.add( modal, 'md-show' );
                ga('send', 'pageview', '/show-frame-' + el.getAttribute('data-modal'));

                overlay.removeEventListener('click', overlayListener);
                overlayListener = function(){ removeModalHandler(el,modal); };
                overlay.addEventListener('click', overlayListener);

                if( classie.has( el, 'md-setperspective' ) ) {
                    setTimeout( function() {
                        classie.add( document.documentElement, 'md-perspective' );
                    }, 25 );
                }
                ev.preventDefault();
            };

			el.addEventListener( 'click', elClickListener);

            var modalLinkClickListener = function( ev ) {

                setTimeout( function() {
                    ev.stopPropagation();
                    removeModalHandler(el,modal);
                }, 50 );
            };


            [].slice.call(modal.querySelectorAll('a') ).forEach( function( el, j ) {
                el.addEventListener( 'click', modalLinkClickListener);
            });

            var modalCloseClickListener = function( ev ) {
                ev.stopPropagation();
                removeModalHandler(el,modal); // If element launched iframe video, this will also remove iframe, which will stop video

                // Unpause background video
                var theVideo = document.getElementById('theVideo');
                if (theVideo) {
                    theVideo.play();
                }
            };

			close.addEventListener( 'click', modalCloseClickListener);



            $(document).keyup(function(ev) {
                if (ev.keyCode == 27) {
                    ev.stopPropagation();
                    removeModalHandler(el,modal);
                }
            });

            // Allow reinit to tear down existing listeners, then reassign
            $(el).on('reinit.modalEffects',function(){

                // Remove reinit event, it will be reassigned as part of reinit
                $(el).off('reinit.modalEffects');

                // Tear down existing listeners
                el.removeEventListener('click', elClickListener);
                [].slice.call(modal.querySelectorAll('a') ).forEach( function( el, j ) {
                    el.removeEventListener( 'click', modalLinkClickListener);
                });
                close.removeEventListener('click', modalCloseClickListener);

                // Reinit
                init($(el).data('reinit'));
            });

		} );

	}

	init();

})();
