/*
 * MintoLog Dynamic Page
 * ----------------------
 * 콘텐츠는 아래 DATA만 수정하면 화면에 자동으로 반영됩니다.
 */

const siteData = [ 
    {
        id: "vlog",
        title: "Vlog",
        items: [
            {
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
                category: "VLOG · 01",
                title: "A Day Outside",
                description: "햇살 좋은 날의 작은 여행과 일상.",
                date: "2026.08.20"
            },
            {
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
                category: "VLOG · 02",
                title: "Summer Trip",
                description: "바다와 함께 보낸 여름날의 기록.",
                date: "2026.08.15"
            },
            {
                image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85",
                category: "VLOG · 03",
                title: "Into Nature",
                description: "잠시 쉬어가는 자연 속 하루.",
                date: "2026.08.08"
            }
        ]
    },

    {
        id: "story",
        title: "Story",
        items: [
            {
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
                category: "STORY · 01",
                title: "Slow Morning",
                description: "커피 한 잔으로 시작하는 느긋한 아침.",
                date: "2026.08.05"
            },
            {
                image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
                category: "STORY · 02",
                title: "Little Moments",
                description: "평범해서 더 소중했던 하루의 순간들.",
                date: "2026.07.29"
            },
            {
                image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=85",
                category: "STORY · 03",
                title: "Somewhere New",
                description: "처음 만난 장소에서 발견한 새로운 이야기.",
                date: "2026.07.21"
            }
        ]
    },

    {
        id: "photos",
        title: "Photos",
        items: [
            {
                image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
                category: "PHOTO · 01",
                title: "Green Days",
                description: "초록이 가장 아름답게 보였던 어느 날.",
                date: "2026.07.15"
            },
            {
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
                category: "PHOTO · 02",
                title: "Quiet View",
                description: "조용히 바라보고 싶은 풍경.",
                date: "2026.07.09"
            },
            {
                image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85",
                category: "PHOTO · 03",
                title: "Golden Hour",
                description: "하루가 천천히 저물어가는 시간.",
                date: "2026.07.02"
            }
        ]
    }
];


/* ==========================================
   DOM
========================================== */

const nav = document.getElementById("mainNav");
const contentWrapper = document.getElementById("contentWrapper");
const heroImage = document.getElementById("heroImage");

const detailModal = document.getElementById("detailModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalDate = document.getElementById("modalDate");
const modalClose = document.getElementById("modalClose");


/* ==========================================
   Navigation 생성
========================================== */

function renderNavigation() {

    nav.innerHTML = siteData.map(section => `
        <a href="#${section.id}" data-target="${section.id}">
            ${section.title}
        </a>
    `).join("");
}


/* ==========================================
   콘텐츠 Section 생성
========================================== */

function renderSections() {

    contentWrapper.innerHTML = siteData.map(section => {

        const cards = section.items.map((item, index) => `
            <article
                class="content-card"
                data-section="${section.id}"
                data-index="${index}"
                tabindex="0">

                <div class="content-image-wrap">
                    <img
                        src="${item.image}"
                        class="content-image"
                        alt="${item.title}"
                        loading="lazy">
                </div>

                <div class="content-category">
                    ${item.category}
                </div>

                <h3 class="content-title">
                    ${item.title}
                </h3>

                <p class="content-description">
                    ${item.description}
                </p>

                <div class="content-date">
                    ${item.date}
                </div>

            </article>
        `).join("");

        return `
            <section
                class="content-section"
                id="${section.id}">

                <div class="section-heading">

                    <h2 class="section-title">
                        ${section.title}
                    </h2>

                    <div class="section-line"></div>

                </div>

                <div class="content-grid">
                    ${cards}
                </div>

            </section>
        `;

    }).join("");
}


/* ==========================================
   카드 클릭 이벤트
========================================== */

function bindCardEvents() {

    const cards = document.querySelectorAll(".content-card");

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const sectionId = card.dataset.section;
            const itemIndex = Number(card.dataset.index);

            const section = siteData.find(
                item => item.id === sectionId
            );

            const item = section.items[itemIndex];

            openModal(item);
        });


        /* 키보드 접근성 */

        card.addEventListener("keydown", event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                card.click();
            }

        });

    });
}


/* ==========================================
   상세보기 Modal
========================================== */

function openModal(item) {

    modalImage.src = item.image;
    modalImage.alt = item.title;

    modalCategory.textContent = item.category;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modalDate.textContent = item.date;

    detailModal.classList.add("show");

    detailModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeModal() {

    detailModal.classList.remove("show");

    detailModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


modalClose.addEventListener(
    "click",
    closeModal
);


detailModal.addEventListener(
    "click",
    event => {

        if (event.target === detailModal) {
            closeModal();
        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            detailModal.classList.contains("show")
        ) {
            closeModal();
        }

    }
);


/* ==========================================
   Scroll Animation
========================================== */

function setupScrollAnimation() {

    const cards =
        document.querySelectorAll(".content-card");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "is-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    cards.forEach((card, index) => {

        /*
         * 같은 줄의 카드가
         * 살짝 시간차를 두고 등장
         */

        card.style.transitionDelay =
            `${(index % 3) * 100}ms`;

        observer.observe(card);

    });
}


/* ==========================================
   현재 Section에 맞춰 메뉴 활성화
========================================== */

function setupActiveNavigation() {

    const sections =
        document.querySelectorAll(".content-section");

    const navLinks =
        document.querySelectorAll(".nav-menu a");

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        navLinks.forEach(link => {
                            link.classList.remove(
                                "active"
                            );
                        });

                        const activeLink =
                            document.querySelector(
                                `.nav-menu a[data-target="${entry.target.id}"]`
                            );

                        if (activeLink) {
                            activeLink.classList.add(
                                "active"
                            );
                        }

                    }

                });

            },
            {
                rootMargin: "-30% 0px -55% 0px"
            }
        );


    sections.forEach(section => {
        observer.observe(section);
    });
}


/* ==========================================
   Hero Parallax
========================================== */

function setupHeroParallax() {

    window.addEventListener(
        "scroll",
        () => {

            const scrollY =
                window.scrollY;

            if (scrollY > 700) return;

            heroImage.style.transform =
                `translateY(${scrollY * 0.08}px)`;

        },
        {
            passive: true
        }
    );
}


/* ==========================================
   이미지 로딩 오류 처리
========================================== */

document.addEventListener(
    "error",
    event => {

        if (
            event.target.tagName === "IMG"
        ) {

            event.target.style.background =
                "#eeeeee";

        }

    },
    true
);


/* ==========================================
   초기 실행
========================================== */

function init() {

    renderNavigation();

    renderSections();

    bindCardEvents();

    setupScrollAnimation();

    setupActiveNavigation();

    setupHeroParallax();

}


init();
