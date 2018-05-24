$(function() {
    //Test RSS feeds definitions
    describe('RSS Feeds', () => {

        //Tests to make sure that the allFeeds variable has been defined and that it is not empty
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test to make sure that each feed has a URL defined and that the URL is not empty.
        it('The URL\'s are defined and NOT empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });

        // Test to make sure that each feed has a name defined and that the name is not empty.
        it('The name\'s are defined and NOT empty', () => {
            allFeeds.forEach((feed) => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });

    });


    //The menu test
    describe('The menu', () => {

        //Check if body has a class "menu-hidden"
        it('The menu has class "menu-hidden"', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        //Check if menu change visibility when the menu is clicked
        it('The menu change visibility when the menu is clicked', () => {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    });


    // Initial Entries test
    describe('Initial Entrie', () => {

        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            })
        });

        //Check if there is at least a single entry element within the feed container.
        it('there is at least a single .entry element within the .feed container', (done) => {
            expect($('.entry')).toBeDefined();
            expect($('.entry').length).toBeGreaterThan(0);
            done();
        });

    });

    // New Feed Selection test
    describe('New Feed Selection', () => {
        let firstFeed;
        let secondFeed;

        beforeEach((done) => {
            loadFeed(0, () => {
                firstFeed = $('.feed').html();
                done();
            });
        });

        beforeEach((done) => {
            loadFeed(1, () => {
                secondFeed = $('.feed').html();
                done();
            });
        });

        // Check if the content actually changes
        it('checks if two feeds are different', (done) => {
            expect(firstFeed).not.toEqual(secondFeed);
            done();
        });
    });

}());