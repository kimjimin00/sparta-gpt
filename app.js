/*
 * MintoLog HOME JavaScript
 * ------------------------------------
 * 중요:
 * 카드 클릭 시 확대/Modal을 사용하지 않고
 * detail.html?id=콘텐츠ID 페이지로 이동합니다.
 */

const siteData = [
    {
        id: "vlog",
        title: "Vlog",
        items: [
            {
                id: "vlog-01",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
                category: "VLOG · 01",
                title: "A Day Outside",
                description: "햇살 좋은 날의 작은 여행과 일상.",
                date: "2026.08.20"
            },
            {
                id: "vlog-02",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
                category: "VLOG · 02",
                title: "Summer Trip",
                description: "바다와 함께 보낸 여름날의 기록.",
                date: "2026.08.15"
            },
            {
                id: "vlog-03",
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
                id: "story-01",
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
                category: "STORY · 01",
                title: "Slow Morning",
                description: "커피 한 잔으로 시작하는 느긋한 아침.",
                date: "2026.08.05"
            },
            {
                id: "story-02",
                image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=900&q=85",
                category: "STORY · 02",
                title: "Little Moments",
                description: "평범해서 더 소중했던 하루의 순간들.",
                date: "2026.07.29"
            },
            {
                id: "story-03",
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
                id: "photos-01",
                image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85",
                category: "PHOTO · 01",
                title: "Green Days",
                description: "초록이 가장 아름답게 보였던 어느 날.",
                date: "2026.07.15"
            },
            {
                id: "photos-02",
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
                category: "PHOTO · 02",
                title: "Quiet View",
                description: "조용히 바라보고 싶은 풍경.",
                date: "2026.07.09"
            },
            {
                id: "photos-03",
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


/* ==========================================
   상단 메뉴 생성
   클릭하면 해당 Section으로 이동
========================================== */

function renderNavigation() {

    if (!nav) return;

    nav.innerHTML = siteData.map(section => `
        <a href="#${section.id}" data-target="${section.id}">
            ${section.title}
        </a>
    `).join("");
}


/* ==========================================
   콘텐츠 생성
   ★ 중요:
   기존 Modal / 확대 기능을 완전히 제거하고
   각 카드를 detail.html로 연결합니다.
========================================== */

function renderSections() {

    if (!contentWrapper) return;

    contentWrapper.innerHTML = siteData.map(section => {

        const cards = section.items.map(item => {

            return `
                <a
                    href="detail.html?id=${encodeURIComponent(item.id)}"
                    class="content-card"
                    target="_blank"
                    rel="noopener">

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

                </a>
            `;

        }).join("");

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
   Scroll Animation
========================================== */

function setupScrollAnimation() {

    const cards =
        document.querySelectorAll(".content-card");

    if (!cards.length) return;

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

    if (!sections.length || !navLinks.length) {
        return;
    }

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;

                    navLinks.forEach(link => {
                        link.classList.remove("active");
                    });

                    const activeLink =
                        document.querySelector(
                            `.nav-menu a[data-target="${entry.target.id}"]`
                        );

                    if (activeLink) {
                        activeLink.classList.add("active");
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

    if (!heroImage) return;

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

    setupScrollAnimation();

    setupActiveNavigation();

    setupHeroParallax();

}

init();
