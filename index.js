requirejs.config({
    shim:{
        bootstrap:['jquery'],
        hashchange:['jquery']
    },
    paths:{
        jquery:'lib/jquery',
        knockout:'lib/knockout',
        pager:'lib/pager'
    }
});

requirejs(['jquery','knockout','pager'], function ($, ko,pager) {

    function PagerViewModel(){
        var self    =   this;
    }

    $(function () {
        pager.Href.hash = '#!/';
        pager.extendWithPage(PagerViewModel.prototype);
        ko.applyBindings(new PagerViewModel());
        pager.start();
    });
});