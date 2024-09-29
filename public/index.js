/**
 * Kris Tong
 * 8/10/2024
 * Section AB: Tara and Rasmus
 *
 * Controls events and interactions with the 
 * page and the API fetching/posting for my portfolio.
 */

'use strict';
(function() {
  /* ------------------------------- Variables ------------------------------- */
  const ERROR_TIMEOUT = 3000;

  const PAGE_ELEMENTS = {
    /* ----- Shared ----- */
    ERROR_CONTAINER: 'error-container',

    /* ----- Start page ----- */
    START: {
      PROFILE: 'profile-start'
    },

    /* ----- Home page ----- */
    SIDEBAR: {
      PROFILE: {
        BUTTON: 'profile-home',
        CONTENT: 'about'
      },
      EXPERIENCE: {
        BUTTON: 'experience-button',
        CONTENT: 'experience'
      },
      PROJECTS: {
        BUTTON: 'projects-button',
        CONTENT: 'projects'
      },
      API: {
        BUTTON: 'api-button',
        CONTENT: 'api'
      },
      NODE_API: {
        BUTTON: 'node-api-button',
        CONTENT: 'node-api'
      }
    },

    APIS: {
      CHEAPSHARK_TEXT: 'cheapshark-text',
      CHEAPSHARK: 'cheapshark-button',
      AMIIBO_TEXT: 'amiibo-text',
      AMIIBO: 'amiibo-button',
      ERROR: 'error-button'
    }
  };

  // API URLs
  const CHEAPSHARK_URL = 'https://www.cheapshark.com/api/1.0/deals';
  const AMIIBO_URL = 'https://www.amiiboapi.com/api/amiibo/';

  /* ------------------------------- Helper Functions ------------------------------- */
  /**
   * Returns the DOM element with the specified ID.
   *
   * @param {string} elementId - The ID of the element to retrieve.
   * @return {Element} The DOM element with the specified ID.
   */
  function id(elementId) {
    // Get the element with the specified ID.
    return document.getElementById(elementId);
  }

  /**
   * Returns the first element that matches the specified selector string.
   *
   * @param {string} selector - The CSS selector string to match elements against.
   * @return {Element} The first element that matches the selector.
   */
  /**
   * function qs(selector) {
   *  return document.querySelector(selector);
   * }
   */

  /**
   * Returns a list of elements that match the specified selector string.
   *
   * @param {string} selector - The CSS selector string to match elements against.
   * @return {NodeList} A list of elements that match the selector.
   */
  /**
   * Returns a list of elements that match the specified selector string.
   *
   * @param {string} selector - The CSS selector string to match elements against.
   * @return {NodeList} A list of elements that match the selector.
   */
  /**
   * function qsa(selector) {
   *   return document.querySelectorAll(selector);
   * }
   */

  /**
   * Creates a new HTML element with the specified tag name.
   *
   * @param {string} element - The tag name of the element to create.
   * @return {Element} The newly created element.
   */
  function create(element) {
    return document.createElement(element);
  }

  /* ------------------------------- Functions ------------------------------- */
  /**
   * Redirects the user to the specified HTML page.
   *
   * @param {string} html - The path to the HTML file to navigate to.
   */
  function navigateTo(html) {
    window.location.href = html;
  }

  /**
   * Creates an error container element and appends it to the body of the document.
   */
  function createErrorContainer() {
    const ERROR_CONTAINER = create('div');
    ERROR_CONTAINER.id = 'error-container';
    document.body.appendChild(ERROR_CONTAINER);
  }

  /**
   * Displays an error message on the page for 5 seconds.
   *
   * @param {Error} error - The error to handle.
   */
  function handleError(error) {
    const ERROR_CONTAINER = id(PAGE_ELEMENTS.ERROR_CONTAINER);
    ERROR_CONTAINER.id = 'error-container';
    const ERROR = create('p');
    ERROR.textContent = error.message;
    ERROR_CONTAINER.appendChild(ERROR);

    // Remove the error after 5 seconds
    setTimeout(() => {
      ERROR_CONTAINER.removeChild(ERROR);
    }, ERROR_TIMEOUT);
  }

  /**
   * Checks the status of a response and throws an error if it is not OK.
   *
   * @param {Response} res - The response object to check.
   * @return {Promise<Response>} The original response object if it is OK.
   * @throws {Error} If the response is not OK.
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Fetches data from the specified URL with optional parameters.
   *
   * @param {string} url - The URL to fetch data from.
   * @param {boolean} [requestJSON=true] - Whether to request JSON data.
   * @return {Promise<Object|string>} A Promise that resolves to the fetched data.
   * @throws {Error} If the fetch request fails or the response is not OK.
   */
  async function fetchData(url, requestJSON = true) {
    try {
      let result = await fetch(url);
      await statusCheck(result);
      return await (requestJSON ? result.json() : result.text());
    } catch (err) {
      handleError(err);
    }
  }

  /**
   * Sends a POST request to the specified URL with the provided parameters.
   * 
   * @param {string} url - The URL to send the request to.
   * @param {Object} params - The parameters to append to the request body.
   * @return {Promise<void>} A Promise that resolves when the request is complete.
   * @throws {Error} If the request fails or the response is not OK.
   */
    async function postRequest(url, params) {
      try {
        let res = await fetch(url, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        });
  
        await statusCheck(res);
        return res;
      } catch (err) {
        console.error(err);
        handleError(err);
      }
     }

  /**
   * Displays a list of games from the Cheapshark API when
   * the 'Cheapshark' button is clicked.
   */
  function displayGames() {
    const CHEAPSHARK_TEXT = id(PAGE_ELEMENTS.APIS.CHEAPSHARK_TEXT);
    const CHEAPSHARK_BUTTON = id(PAGE_ELEMENTS.APIS.CHEAPSHARK);
    const GAMES_DIV = create('div');
    GAMES_DIV.id = 'cheapshark-games';

    CHEAPSHARK_BUTTON.removeEventListener('click', displayGames);

    fetchData(CHEAPSHARK_URL + '?storeID=1&upperPrice=15').then(data => {
      data.forEach(game => {
        const GAME = create('div');
        GAME.id = 'cheapshark-game';

        const GAME_IMG = create('img');
        GAME_IMG.src = game.thumb;
        GAME_IMG.alt = game.title;

        const GAME_TITLE = create('p');
        GAME_TITLE.textContent = game.title;

        GAME.appendChild(GAME_TITLE);
        GAME.appendChild(GAME_IMG);
        GAMES_DIV.appendChild(GAME);
      });
    });

    CHEAPSHARK_TEXT.insertAdjacentElement('afterend', GAMES_DIV);
  }

  /**
   * Display a list of Mario Amiibo when the 'Amiibo' button is clicked.
   */
  function displayAmiibo() {
    const AMIIBO_TEXT = id(PAGE_ELEMENTS.APIS.AMIIBO_TEXT);
    const AMIIBO_BUTTON = id(PAGE_ELEMENTS.APIS.AMIIBO);
    const AMBIIBOS_DIV = create('div');
    AMBIIBOS_DIV.id = 'amiibos';

    AMIIBO_BUTTON.removeEventListener('click', displayGames);

    fetchData(AMIIBO_URL + '?name=mario').then(data => {
      data['amiibo'].forEach(amiibo => {
        const AMIIBO = create('div');
        AMIIBO.id = 'amiibo';

        const AMIIBO_IMG = create('img');
        AMIIBO_IMG.src = amiibo.image;
        AMIIBO_IMG.alt = amiibo.name;

        const AMIIBO_TITLE = create('p');
        AMIIBO_TITLE.textContent = amiibo.name;

        AMIIBO.appendChild(AMIIBO_TITLE);
        AMIIBO.appendChild(AMIIBO_IMG);
        AMBIIBOS_DIV.appendChild(AMIIBO);
      });
    });

    AMIIBO_TEXT.insertAdjacentElement('afterend', AMBIIBOS_DIV);
  }

  /**
   * Creates and returns a song display element.
   * 
   * @return {HTMLElement} The created song display element.
   */
  function createSongDisplay() {
    const SONG_DISPLAY = create('div');
    SONG_DISPLAY.classList.add('song-display');
    SONG_DISPLAY.appendChild(create('img'));

    const TITLE_AUTHOR = create('div');
    TITLE_AUTHOR.appendChild(create('h2'));
    TITLE_AUTHOR.appendChild(create('h3'));
    SONG_DISPLAY.appendChild(TITLE_AUTHOR);
    
    return SONG_DISPLAY;
  }

  /**
   * Creates and returns a container element for song display.
   * The container element is used to display songs on the page.
   *
   * @return {HTMLElement} The created container element.
   */
  function createSongContainer() {
    const container = create('div');
    container.classList.add('song-container');
    return container;
  }

  /**
   * Displays a random song from the API on the page.
   * If the song display element does not exist, it creates it.
   */
  function displayRandomSong() {
    let songDisplay = id('random-song');

    // Create the song display if it doesn't exist
    if (!songDisplay) {
      songDisplay = createSongDisplay();
      songDisplay.id = 'random-song';
      id('random-song-text').insertAdjacentElement('afterEnd', songDisplay);
    }

    fetchData('/api/song').then(data => {
      songDisplay.querySelector('h2').textContent = data.song.title;
      songDisplay.querySelector('h3').textContent = data.song.artist;
      songDisplay.querySelector('img').src = data.song.img;
    });
  }

  /**
   * Displays all the songs from the API on the page.
   * This function is only called once when the "All Songs" button is clicked.
   */
  function displayAllSongs() {
    // Display only once
    id('all-songs-button').removeEventListener('click', displayAllSongs);

    const allSongs = createSongContainer();
    id('all-songs-text').insertAdjacentElement('afterEnd', allSongs);

    fetchData('/api/songs').then(songData => {
      songData.songs.forEach(song => {
        const songDisplay = createSongDisplay();
        songDisplay.querySelector('h2').textContent = song.title;
        songDisplay.querySelector('h3').textContent = song.artist;
        songDisplay.querySelector('img').src = song.img;
        allSongs.appendChild(songDisplay);
      });
    });
  }

  function addRecommendation() {
    const songTitle = id('song-input');
    const songArtist = id('artist-input');
    const songImg = id('img-input');

    if (songTitle.value && songArtist.value && songImg.value) {
      postRequest('/api/recommendations', { 
        song: {
          title: songTitle.value,
          artist: songArtist.value,
          img: songImg.value
        }
      });

      const songDisplay = createSongDisplay();
      songDisplay.querySelector('h2').textContent = songTitle.value;
      songDisplay.querySelector('h3').textContent = songArtist.value;
      songDisplay.querySelector('img').src = songImg.value;
      id('recommendations').appendChild(songDisplay);

      songTitle.value = '';
      songArtist.value = '';
      songImg.value = '';
    }
  }

  /* ------------------------------- Init functions ------------------------------- */
  /**
   * Loads the start page and sets up navigation.
   */
  function loadStartPage() {
    /* ----- Start button ----- */
    const PROFILE = id(PAGE_ELEMENTS.START.PROFILE);
    PROFILE.addEventListener('click', () => {
      navigateTo('home.html');
    });

    /* ----- Error handling ----- */
    createErrorContainer();
  }

  /**
   * Loads the home page and sets up navigation and API calls.
   */
  function loadHomePage() {
    /* ----- Navigation ----- */
    for (const section of Object.values(PAGE_ELEMENTS.SIDEBAR)) {
      const sectionButton = id(section.BUTTON);
      const sectionContent = id(section.CONTENT);

      sectionButton.addEventListener('click', () => {
        sectionContent.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }

    /* ----- API ----- */
    // Cheapshark
    const CHEAPSHARK_BUTTON = id(PAGE_ELEMENTS.APIS.CHEAPSHARK);
    CHEAPSHARK_BUTTON.addEventListener('click', displayGames);

    // Amiibo
    const AMIIBO_BUTTON = id(PAGE_ELEMENTS.APIS.AMIIBO);
    AMIIBO_BUTTON.addEventListener('click', displayAmiibo);

    // Error button
    const ERROR_BUTTON = id(PAGE_ELEMENTS.APIS.ERROR);
    ERROR_BUTTON.addEventListener('click', () => {
      fetchData('https;;://DICTIONARY.ORG');
    });

    /* ----- Node API ----- */
    id("random-song-button").addEventListener('click', displayRandomSong);
    id("all-songs-button").addEventListener('click', displayAllSongs);
    id("recommendations-button").addEventListener('click', addRecommendation);

    // Load recommendations
    fetchData('/api/recommendations').then(data => {
      const RECOMMENDATIONS_CONTAINER = createSongContainer();
      RECOMMENDATIONS_CONTAINER.id = 'recommendations';
      id('recommendations-title').insertAdjacentElement('afterEnd', RECOMMENDATIONS_CONTAINER);
      data.recommendations.forEach(song => {
        const songDisplay = createSongDisplay();
        songDisplay.querySelector('h2').textContent = song.title;
        songDisplay.querySelector('h3').textContent = song.artist;
        songDisplay.querySelector('img').src = song.img;
        RECOMMENDATIONS_CONTAINER.appendChild(songDisplay);
      })
    });

    /* ----- Error handling ----- */
    createErrorContainer();
  }

  /* ------------------------------- Initialization ------------------------------- */

  document.addEventListener('DOMContentLoaded', () => {
    const BODY_CLASSES = document.body.classList;

    if (BODY_CLASSES.contains('start')) {
      loadStartPage();
    } else if (BODY_CLASSES.contains('home')) {
      loadHomePage();
    }

  });

})();