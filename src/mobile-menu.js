export default class tabList {
  constructor() {
    this.tabs = [];
  }

  getTabs() {
    return this.tabs;
  }

  getTabNames() {
    return this.tabs.map((x) => x.name);
  }

  addTab(tab) {
    this.tabs.push(tab);
  }

  removeTab(tab) {
    const idx = this.getTabNames().indexOf(tab.name);
    this.tabs.splice(idx, 1);
  }

  createTabMenu() {
    const tabs = this.getTabs();

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container');

    for (let i = 0; i < tabs.length; i++) {
      const name = tabs[i].name;

      const tab = document.createElement('div');
      tab.classList.add('tab-item');

      if (i == 0) {
        tab.classList.add('active');
      }

      tab.textContent = name;
      tab.addEventListener('click', toggleTab);
      tabContainer.appendChild(tab);
    }

    return tabContainer;
  }

  initializeTabContent() {
    const tabs = this.getTabs();
    createTabSection(tabs[0]);
  }
}

export const allTabs = new tabList();

// Add window variable for debugging
Window.tabList = allTabs;

export class tabContents {
  constructor(name, headline, img) {
    this.name = name;
    this.headline = headline;
    this.img = img;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get headline() {
    return this._headline;
  }

  set headline(value) {
    this._headline = value;
  }

  get img() {
    return this._img;
  }

  set img(value) {
    this._img = value;
  }
}

export function createTabSection(tabContent) {
  // Clear Previous content
  const tabBody = document.querySelector('.tab-body');
  tabBody.textContent = '';

  // Grab new values
  const name = tabContent.name;
  const headline = tabContent.headline;
  const img = tabContent.img;

  // Append new elements
  const nameBlock = document.createElement('h1');
  nameBlock.classList.add('tab-name');
  nameBlock.textContent = name;

  const headlineBlock = document.createElement('p');
  headlineBlock.classList.add('tab-headline');
  headlineBlock.textContent = headline;

  const imgBlock = document.createElement('img');
  imgBlock.classList.add('tab-img');
  imgBlock.src = img;

  tabBody.appendChild(nameBlock);
  tabBody.appendChild(headlineBlock);
  tabBody.appendChild(imgBlock);
}

export function toggleTab(e) {
  const tab = e.target;
  const activeTab = document.querySelector('.tab-item.active');

  if (tab.textContent == activeTab.textContent) {
    return;
  } else {
    activeTab.classList.remove('active');

    const tabNames = allTabs.getTabNames();
    const idx = tabNames.indexOf(tab.textContent);

    tab.classList.add('active');
    createTabSection(allTabs.getTabs()[idx]);
  }
}
