import { BookAPI } from "../data/libraryData.js";

export class LibraryApp {
  constructor() {
    this.book = [];
    // this.filterBooks = [];
    this.searchInput = document.getElementById("searchInput");
    this.categoryFilter = document.getElementById("categoryFilter");
    this.booksGrid = document.getElementById("booksGrid");
    this.loading = document.getElementById("loading");
    this.noResults = document.getElementById("noResults");

    this.init();
  }

  async init() {
    this.setUpEventListeners();
    this.setupScrollAnimation();
    await this.loadBooks();
  }

  setUpEventListeners() {
    // Search input with debouncing
    let searchTimeout;
    this.searchInput.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        this.filterAndDisplayBooks();
      }, 300);
    });
    // category filter
    this.categoryFilter.addEventListener("change", () => {
      this.filterAndDisplayBooks();
    });
  }

  setupScrollAnimation() {
    const observerOption = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOption);

    //Observer section title
    observer.observe(document.getElementById("sectionTitle"));
  }

  //  THis loads books
  async loadBooks() {
    try {
      this.books = await BookAPI.getAllBooks();

      this.filteredBooks = [...this.books];
      this.displayBooks();
      //   testing
      // console.log(this.books);
      // console.log(this.filteredBooks);
    } catch (error) {
      console.error("Error loading books:", error);
      this.showNoResults();
    }
  }

  filterAndDisplayBooks() {
    const searchTerm = this.searchInput.value.trim();
    const category = this.categoryFilter.value;

    this.filteredBooks = BookAPI.filterBooks(this.books, searchTerm, category);
    this.displayBooks();
  }

  displayBooks() {
    this.loading.style.display = "none";

    if (this.filteredBooks.length === 0) {
      this.showNoResults();
      return;
    }

    this.noResults.style.display = "none";
    this.booksGrid.style.display = "grid";
    this.booksGrid.innerHTML = "";

    this.filteredBooks.forEach((book, index) => {
      const bookCard = this.createBookCard(book);
      this.booksGrid.appendChild(bookCard);
      //   test
      //   console.log(this.booksGrid);

      // Stagger animation
      setTimeout(() => {
        bookCard.classList.add("visible");
      }, index * 100);
    });
  }

  createBookCard(book) {
    const card = document.createElement("div");
    card.className = "book-card";
    card.innerHTML = `
        <div class="book-cover">
                        <img src="${book.cover}" alt="${book.title}" loading="lazy" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="book-placeholder" style="display: none;">📚</div>
                    </div>
                    <div class="book-info">
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-author">by ${book.author}</p>
                        <span class="book-category">${book.category}</span>
                      
                        <p class="book-description">${book.description}</p>
                    </div>
    `;

    // Add click event for  future  book details
    card.addEventListener("click", () => {
      // Fututre: Open book details modal ornavigate  page
    });

    return card;
  }

  generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = "";

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<span class="star">★</span>';
    }

    // Half star
    if (hasHalfStar) {
      starsHTML += '<span class="star">★</span>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<span class="star empty">★</span>';
    }

    return starsHTML;
  }

  showNoResults() {
    this.booksGrid.style.display = "none";
    this.noResults.style.display = "block";
  }
}
