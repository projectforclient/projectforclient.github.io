if(!plp.screenSizes)
            {
                 plp.screenSizes = {
                   sm:768,
                   md:992,
                   lg:1200,
                 };
            }
            if (plp.screens === 'screens-xs') plp.screen = 'xs';
            else if (plp.screens === 'screens-sm') plp.screen = 'sm';
            else if (plp.screens === 'screens-md') plp.screen = 'md';
            else if (plp.screens === 'screens-lg') plp.screen = 'lg';
            else if (plp.screens === 'screens-xs-sm') {
                if (document.body.clientWidth >= 768) plp.screen = 'sm';
                else if (document.body.clientWidth <= 767) plp.screen = 'xs';
            } else if (plp.screens === 'screens-xs-md') {
                if (document.body.clientWidth >= 992) plp.screen = 'md';
                else if (document.body.clientWidth <= 991) plp.screen = 'xs';
            } else if (plp.screens === 'screens-xs-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth <= 1199) plp.screen = 'xs';
            } else if (plp.screens === 'screens-sm-md') {
                if (document.body.clientWidth >= 992) plp.screen = 'md';
                else if (document.body.clientWidth <= 991) plp.screen = 'sm';
            } else if (plp.screens === 'screens-sm-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth <= 1199) plp.screen = 'sm';
            } else if (plp.screens === 'screens-md-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth <= 1199) plp.screen = 'md';
            } else if (plp.screens === 'screens-xs-sm-md') {
                if (document.body.clientWidth >= 992) plp.screen = 'md';
                else if (document.body.clientWidth >= 768 && document.body.clientWidth <= 991) plp.screen = 'sm';
                else if (document.body.clientWidth <= 767) plp.screen = 'xs';
            } else if (plp.screens === 'screens-xs-sm-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth >= 768 && document.body.clientWidth <= 1199) plp.screen = 'sm';
                else if (document.body.clientWidth <= 767) plp.screen = 'xs';
            } else if (plp.screens === 'screens-xs-md-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth >= 992 && document.body.clientWidth <= 1199) plp.screen = 'md';
                else if (document.body.clientWidth <= 991) plp.screen = 'xs';
            } else if (plp.screens === 'screens-sm-md-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth >= 992 && document.body.clientWidth <= 1199) plp.screen = 'md';
                else if (document.body.clientWidth <= 991) plp.screen = 'sm';
            } else if (plp.screens === 'screens-xs-sm-md-lg') {
                if (document.body.clientWidth >= 1200) plp.screen = 'lg';
                else if (document.body.clientWidth >= 992 && document.body.clientWidth <= 1199) plp.screen = 'md';
                else if (document.body.clientWidth >= 768 && document.body.clientWidth <= 991) plp.screen = 'sm';
                else if (document.body.clientWidth <= 767) plp.screen = 'xs';
            }
            [].slice.call(document.body.childNodes).forEach(function (el) {
                if (el.className && el.className.indexOf('area') >= 0) {
                    el.classList.add('screen-' + plp.screen);
                }
            });