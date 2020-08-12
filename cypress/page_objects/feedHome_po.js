class FeedHome {
  constructor() {
    this.header = {
      searchInput: 'div#global-nav-search input',
      searchButton: 'div#global-nav-search button',
      navigation: {
        feedHomeNavButton: 'a[data-test-global-nav-link="feed"]',
        myNetworkNavButton: 'a[data-test-global-nav-link="mynetwork"]',
        jobsNavButton: 'a[data-test-global-nav-link="jobs"]',
        messagingNavButton: 'a[data-test-global-nav-link="messaging"]',
        notificationNavButton: 'a[data-test-global-nav-link="notifications"]',
        profileNavButton: 'button[data-control-name="nav.settings"]',
        appLauncherNavButton: 'button[data-control-name="nav.launcher"]',
        spotlightOneNavButton: 'a[data-control-name="premium_nav_upsell_text_click"]'
      }
    }
  }

  searchName(text){
    cy.get(this.header.searchInput).type(text)
    cy.get(this.header.searchButton).click()
  }
}

export default new FeedHome()