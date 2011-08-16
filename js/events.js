/*
**	EVENTS MODULE
*/



function eventsCreate() {


	document.getElementById( "buttonWidget0" ).addEventListener( "click", function() {
		uio.openHelp();
	} , false );	
	
	document.getElementById( "buttonWidget2" ).addEventListener( "click", function() {
		uio.closeWidget();
	} , false );	

	document.getElementById( "pageMode" ).addEventListener( "click", function() {
		uio.changeFrontPageMode();
	} , false );


	
	
	/*** AQUARIUM VIEW BUTTONS ***/

	// MOUSEOVER
	
	document.getElementById( "buttonView0" ).addEventListener( "mouseover", function() {
		uio.highlightViewButtonOn( VIEW_AQUARIUM );
	} , false );	

	document.getElementById( "buttonView1" ).addEventListener( "mouseover", function() {
		uio.highlightViewButtonOn( VIEW_FISH );
	} , false );
	
	document.getElementById( "buttonView2" ).addEventListener( "mouseover", function() {
		uio.highlightViewButtonOn( VIEW_SCENERY );
	} , false );	

	document.getElementById( "buttonView3" ).addEventListener( "mouseover", function() {
		uio.highlightViewButtonOn( VIEW_LIGHTING );
	} , false );	
	
	document.getElementById( "buttonView4" ).addEventListener( "mouseover", function() {
		uio.highlightViewButtonOn( VIEW_ACCESSORIES );
	} , false );	

	document.getElementById( "buttonView5" ).addEventListener( "mouseover", function() {
		uio.highlightViewButtonOn( VIEW_STATISTICS );
	} , false );
	
	// MOUSEOUT
	
	document.getElementById( "buttonView0" ).addEventListener( "mouseout", function() {
		uio.highlightViewButtonOff( VIEW_AQUARIUM );
	} , false );	

	document.getElementById( "buttonView1" ).addEventListener( "mouseout", function() {
		uio.highlightViewButtonOff( VIEW_FISH );
	} , false );
	
	document.getElementById( "buttonView2" ).addEventListener( "mouseout", function() {
		uio.highlightViewButtonOff( VIEW_SCENERY );
	} , false );	

	document.getElementById( "buttonView3" ).addEventListener( "mouseout", function() {
		uio.highlightViewButtonOff( VIEW_LIGHTING );
	} , false );	
	
	document.getElementById( "buttonView4" ).addEventListener( "mouseout", function() {
		uio.highlightViewButtonOff( VIEW_ACCESSORIES );
	} , false );	

	document.getElementById( "buttonView5" ).addEventListener( "mouseout", function() {
		uio.highlightViewButtonOff( VIEW_STATISTICS );
	} , false );

	// CLICK
	
	document.getElementById( "buttonView0" ).addEventListener( "mousedown", function() {
		uio.changeView(VIEW_AQUARIUM);
	} , false );	

	document.getElementById( "buttonView1" ).addEventListener( "mousedown", function() {
		uio.changeView(VIEW_FISH);
	} , false );
	
	document.getElementById( "buttonView2" ).addEventListener( "mousedown", function() {
		uio.changeView(VIEW_SCENERY);
	} , false );	

	document.getElementById( "buttonView3" ).addEventListener( "mousedown", function() {
		uio.changeView(VIEW_LIGHTING);
	} , false );	
	
	document.getElementById( "buttonView4" ).addEventListener( "mousedown", function() {
		uio.changeView(VIEW_ACCESSORIES);
	} , false );	

	document.getElementById( "buttonView5" ).addEventListener( "mousedown", function() {
		uio.changeView(VIEW_STATISTICS);
		stats.refreshStatsPage();
	} , false );	
	
	
	
	
	
	/*** S C E N E R Y   V I E W ***/
	
	/*** BUY SCENERIES BUTTONS ***/
	
	document.getElementById( "buttonSceneryBuy0" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 0 );
	} , false );
	document.getElementById( "buttonSceneryBuy1" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 1 );
	} , false );
	document.getElementById( "buttonSceneryBuy2" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 2 );
	} , false );
	document.getElementById( "buttonSceneryBuy3" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 3 );
	} , false );
	document.getElementById( "buttonSceneryBuy4" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 4 );
	} , false );
	document.getElementById( "buttonSceneryBuy5" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 5 );
	} , false );
	document.getElementById( "buttonSceneryBuy6" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 6 );
	} , false );
	document.getElementById( "buttonSceneryBuy7" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 7 );
	} , false );
	document.getElementById( "buttonSceneryBuy8" ).addEventListener( "mousedown", function() {
		aquarium.buyScenery( 8 );
	} , false );

	document.getElementById( "buttonScenerySell1" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 1 );
	} , false );
	document.getElementById( "buttonScenerySell2" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 2 );
	} , false );
	document.getElementById( "buttonScenerySell3" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 3 );
	} , false );
	document.getElementById( "buttonScenerySell4" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 4 );
	} , false );
	document.getElementById( "buttonScenerySell5" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 5 );
	} , false );
	document.getElementById( "buttonScenerySell6" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 6 );
	} , false );
	document.getElementById( "buttonScenerySell7" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 7 );
	} , false );
	document.getElementById( "buttonScenerySell8" ).addEventListener( "mousedown", function() {
		aquarium.sellScenery( 8 );
	} , false );
	
	
	
	/*** L I G H T I N G   V I E W ***/
	
	/*** BUY LIGHTS BUTTONS ***/
	
	document.getElementById( "buttonLightBuy0" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 0 );
	} , false );
	document.getElementById( "buttonLightBuy1" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 1 );
	} , false );
	document.getElementById( "buttonLightBuy2" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 2 );
	} , false );
	document.getElementById( "buttonLightBuy3" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 3 );
	} , false );
	document.getElementById( "buttonLightBuy4" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 4 );
	} , false );
	document.getElementById( "buttonLightBuy5" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 5 );
	} , false );
	document.getElementById( "buttonLightBuy6" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 6 );
	} , false );
	document.getElementById( "buttonLightBuy7" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 7 );
	} , false );
	document.getElementById( "buttonLightBuy8" ).addEventListener( "mousedown", function() {
		aquarium.buyLight( 8 );
	} , false );

	document.getElementById( "buttonLightSell1" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 1 );
	} , false );
	document.getElementById( "buttonLightSell2" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 2 );
	} , false );
	document.getElementById( "buttonLightSell3" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 3 );
	} , false );
	document.getElementById( "buttonLightSell4" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 4 );
	} , false );
	document.getElementById( "buttonLightSell5" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 5 );
	} , false );
	document.getElementById( "buttonLightSell6" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 6 );
	} , false );
	document.getElementById( "buttonLightSell7" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 7 );
	} , false );
	document.getElementById( "buttonLightSell8" ).addEventListener( "mousedown", function() {
		aquarium.sellLight( 8 );
	} , false );	
	
	
	/*** A C C E S 0 R I E S   V I E W ***/
	
	/*** TABS ***/
	
	document.getElementById( "tabButtonFilterShop" ).addEventListener( "mousedown", function() {
		uio.changeTab( "BackgroundShop", "FilterShop" );
	} , false );
	document.getElementById( "tabButtonBackgroundShop" ).addEventListener( "mousedown", function() {
		uio.changeTab( "FilterShop", "BackgroundShop" );
	} , false );	
	
	
	/*** S T A T I S T I C S    V I E W ***/
	
	/*** TABS ***/
	
	document.getElementById( "tabButtonFishList" ).addEventListener( "mousedown", function() {
		uio.changeTab( "Statistics", "FishList" );
		stats.refreshStatsPage();
	} , false );
	document.getElementById( "tabButtonStatistics" ).addEventListener( "mousedown", function() {
		uio.changeTab( "FishList", "Statistics" );
		stats.refreshStatsPage();
		
	} , false );	
	
	/*** FILTERS BUTTONS ***/
	
	document.getElementById( "buttonFilterBuy0" ).addEventListener( "mousedown", function() {
		aquarium.buyFilter( 0 );
	} , false );
	document.getElementById( "buttonFilterBuy1" ).addEventListener( "mousedown", function() {
		aquarium.buyFilter( 1 );
	} , false );
	document.getElementById( "buttonFilterBuy2" ).addEventListener( "mousedown", function() {
		aquarium.buyFilter( 2 );
	} , false );
	document.getElementById( "buttonFilterBuy3" ).addEventListener( "mousedown", function() {
		aquarium.buyFilter( 3 );
	} , false );
	document.getElementById( "buttonFilterBuy4" ).addEventListener( "mousedown", function() {
		aquarium.buyFilter( 4 );
	} , false );
	document.getElementById( "buttonFilterBuy5" ).addEventListener( "mousedown", function() {
		aquarium.buyFilter( 5 );
	} , false );

	document.getElementById( "buttonFilterSell1" ).addEventListener( "mousedown", function() {
		aquarium.sellFilter( 1 );
	} , false );
	document.getElementById( "buttonFilterSell2" ).addEventListener( "mousedown", function() {
		aquarium.sellFilter( 2 );
	} , false );
	document.getElementById( "buttonFilterSell3" ).addEventListener( "mousedown", function() {
		aquarium.sellFilter( 3 );
	} , false );
	document.getElementById( "buttonFilterSell4" ).addEventListener( "mousedown", function() {
		aquarium.sellFilter( 4 );
	} , false );
	document.getElementById( "buttonFilterSell5" ).addEventListener( "mousedown", function() {
		aquarium.sellFilter( 5 );
	} , false );

	
	
	/*** BACKGROUND BUTTONS ***/
	
	document.getElementById( "buttonBackgroundBuy0" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 0 );
	} , false );
	document.getElementById( "buttonBackgroundBuy1" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 1 );
	} , false );
	document.getElementById( "buttonBackgroundBuy2" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 2 );
	} , false );
	document.getElementById( "buttonBackgroundBuy3" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 3 );
	} , false );
	document.getElementById( "buttonBackgroundBuy4" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 4 );
	} , false );
	document.getElementById( "buttonBackgroundBuy5" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 5 );
	} , false );
	document.getElementById( "buttonBackgroundBuy6" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 6 );
	} , false );
	document.getElementById( "buttonBackgroundBuy7" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 7 );
	} , false );
	document.getElementById( "buttonBackgroundBuy8" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 8 );
	} , false );
	document.getElementById( "buttonBackgroundBuy9" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 9 );
	} , false );
	document.getElementById( "buttonBackgroundBuy10" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 10 );
	} , false );
	document.getElementById( "buttonBackgroundBuy11" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 11 );
	} , false );
	document.getElementById( "buttonBackgroundBuy12" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 12 );
	} , false );
	document.getElementById( "buttonBackgroundBuy13" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 13 );
	} , false );
	document.getElementById( "buttonBackgroundBuy14" ).addEventListener( "mousedown", function() {
		aquarium.buyBackground( 14 );
	} , false );



	
	
	/*** AQUARIUM TOOLS ***/
	document.getElementById( "buttonTool0" ).addEventListener( "mousedown", function() {
		aquarium.scareFish();
	} , false );
	document.getElementById( "buttonTool1" ).addEventListener( "mousedown", function() {
		aquarium.attractFish();
	} , false );	
	document.getElementById( "buttonTool2" ).addEventListener( "mousedown", function() {
		aquarium.addFood();
	} , false );
	document.getElementById( "buttonTool3" ).addEventListener( "mousedown", function() {
		aquarium.addMedicine();
	} , false );
	document.getElementById( "buttonTool4" ).addEventListener( "mousedown", function() {
		aquarium.clean();
	} , false );
	document.getElementById( "buttonTool5" ).addEventListener( "mousedown", function() {
		aquarium.waterChange();
	} , false );
	document.getElementById( "buttonTool6" ).addEventListener( "mousedown", function() {
		aquarium.addGrowHormone();
	} , false );	
	document.getElementById( "buttonTool7" ).addEventListener( "mousedown", function() {
		aquarium.addBreedHormone();
	} , false );	
	
	document.getElementById( "cameraTool" ).addEventListener( "mousedown", function() {
		aquarium.exportPhoto();
	} , false );	
	
	
	
	
	/*** SPEED HANDLE ***/
	document.getElementById( "speedBar" ).addEventListener( "mousedown", function() {
		uio.speedBarSet();
	} , false );

	
	/*** FISH SHOP ***/
	
	// INFO BUTTONS
	
	document.getElementById( "fishSlot0" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 0 ) } , false );
	document.getElementById( "fishSlot1" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 1 ) } , false );
	document.getElementById( "fishSlot2" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 2 ) } , false );
	document.getElementById( "fishSlot3" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 3 ) } , false );
	document.getElementById( "fishSlot4" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 4 ) } , false );
	document.getElementById( "fishSlot5" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 5 ) } , false );
	document.getElementById( "fishSlot6" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 6 ) } , false );
	document.getElementById( "fishSlot7" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 7 ) } , false );
	document.getElementById( "fishSlot8" ).children[4].addEventListener( "mousedown", function() { fishShop.openFishInfo( 8 ) } , false );
	
	// BUY BUTTONS
	
	document.getElementById( "fishSlot0" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 0 ) } , false );
	document.getElementById( "fishSlot1" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 1 ) } , false );
	document.getElementById( "fishSlot2" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 2 ) } , false );
	document.getElementById( "fishSlot3" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 3 ) } , false );
	document.getElementById( "fishSlot4" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 4 ) } , false );
	document.getElementById( "fishSlot5" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 5 ) } , false );
	document.getElementById( "fishSlot6" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 6 ) } , false );
	document.getElementById( "fishSlot7" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 7 ) } , false );
	document.getElementById( "fishSlot8" ).children[5].addEventListener( "mousedown", function() { fishShop.buyFish( 8 ) } , false );
	
	/*** PREFERENCES ***/

	document.getElementById( "confRelaxMode" ).addEventListener( "change", function() { config.relaxChange() } , false );
	document.getElementById( "confNewGame" ).addEventListener( "mousedown", function() { config.newGame() } , false );
	
	
}

