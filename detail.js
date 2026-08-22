/*
 * MintoLog DETAIL JavaScript
 * ------------------------------------
 * detail.html?id=vlog-01
 * 형식으로 전달된 ID를 찾아 상세 페이지를 만듭니다.
 */

const siteData = [
    {
        id: "vlog",
        title: "Vlog",
        items: [
            {
                id: "vlog-01",
                image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=90",
                category: "VLOG · 01",
                title: "A Day Outside",
                description: "햇살 좋은 날의 작은 여행과 일상.",
                date: "2026.08.20",
                body: "햇살 좋은 날, 잠시 일상을 벗어나 천천히 걸으며 기록한 하루입니다."
            },
            {
                id: "vlog-02",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",
                category: "VLOG · 02",
                title: "Summer Trip",
                description: "바다와 함께 보낸 여름날의 기록.",
                date: "2026.08.15",
                body: "푸른 바다와 여름의 공기를 담아본 짧은 여행 기록입니다."
            },
            {
                id: "vlog-03",
                image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=90",
                category: "VLOG · 03",
                title: "Into Nature",
                description: "잠시 쉬어가는 자연 속 하루.",
                date: "2026.08.08",
                body: "도심을 벗어나 자연 속에서 보낸 느린 하루를 기록했습니다."
            }
        ]
    },

    {
        id: "story",
        title: "Story",
        items: [
            {
                id: "story-01",
                image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=90",
                category: "STORY · 01",
                title: "Slow Morning",
                description: "커피 한 잔으로 시작하는 느긋한 아침.",
                date: "2026.08.05",
                body: "커피 한 잔과 함께 천천히 시작한 아침의 작은 이야기입니다."
            },
            {
                id: "story-02",
                image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1600&q=90",
                category: "STORY · 02",
                title: "Little Moments",
                description: "평범해서 더 소중했던 하루의 순간들.",
                date: "2026.07.29",
                body: "특별하지 않아서 오히려 오래 기억하고 싶은 순간들을 담았습니다."
            },
            {
                id: "story-03",
                image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=90",
                category: "STORY · 03",
                title: "Somewhere New",
                description: "처음 만난 장소에서 발견한 새로운 이야기.",
                date: "2026.07.21",
                body: "익숙하지 않은 장소에서 발견한 풍경과 생각을 기록했습니다."
            }
        ]
    },

    {
        id: "photos",
        title: "Photos",
        items: [
            {
                id: "photos-01",
                image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1600&q=90",
                category: "PHOTO · 01",
                title: "Green Days",
                description: "초록이 가장 아름답게 보였던 어느 날.",
                date: "2026.07.15",
                body: "싱그러운 초록빛을 오래 바라보고 싶었던 날의 사진입니다."
            },
            {
                id: "photos-02",
                image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=90",
                category: "PHOTO · 02",
                title: "Quiet View",
                description: "조용히 바라보고 싶은 풍경.",
                date: "2026.07.09",
                body: "잠시 멈춰 서서 바라본 조용한 풍경을 사진으로 남겼습니다."
            },
            {
                id: "photos-03",
                image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&q=90",
                category: "PHOTO · 03",
                title: "Golden Hour",
                description: "하루가 천천히 저물어가는 시간.",
                date: "2026.07.02",
                body: "해가 지기 직전 가장 따뜻한 빛이 머문 순간입니다."
            }
        ]
    }
];


/* URL에서 콘텐츠 ID 가져오기 */

const params = new URLSearchParams(window.location.search);
const contentId = params.get("id");


/* 모든 카테고리에서 콘텐츠 찾기 */

function findContent(id) {

    for (const section of siteData) {

        const item = section.items.find(
            item => item.id === id
        );

        if (item) {
            return item;
        }
    }

    return null;
}


const selectedItem = findContent(contentId);


/* DOM */

const categoryElement =
    document.getElementById("detailCategory");

const titleElement =
    document.getElementById("detailTitle");

const dateElement =
    document.getElementById("detailDate");

const imageElement =
    document.getElementById("detailImage");

const bodyElement =
    document.getElementById("detailBody");

const heartButton =
    document.getElementById("heartButton");

const heartCount =
    document.getElementById("heartCount");


/* 콘텐츠가 없는 경우 */

if (!selectedItem) {

    document.title = "MintoLog";

    categoryElement.textContent =
        "MintoLog";

    titleElement.textContent =
        "Content not found";

    dateElement.textContent =
        "";

    bodyElement.textContent =
        "요청한 콘텐츠를 찾을 수 없습니다.";

    imageElement.style.display =
        "none";

} else {

    /* 페이지 제목 */

    document.title =
        `${selectedItem.title} · MintoLog`;


    /* 콘텐츠 표시 */

    categoryElement.textContent =
        selectedItem.category;

    titleElement.textContent =
        selectedItem.title;

    dateElement.textContent =
        selectedItem.date;

    imageElement.src =
        selectedItem.image;

    imageElement.alt =
        selectedItem.title;

    bodyElement.textContent =
        selectedItem.body;


    /* ==========================================
       좋아요
       콘텐츠별로 별도의 숫자를 저장합니다.
    ========================================== */

    const storageKey =
        `mintolog-like-${selectedItem.id}`;


    let count =
        Number(localStorage.getItem(storageKey)) || 0;


    heartCount.textContent =
        count;


    heartButton.addEventListener(
        "click",
        () => {

            count += 1;


            localStorage.setItem(
                storageKey,
                count
            );


            heartCount.textContent =
                count;


            /*
             * 하트 애니메이션을
             * 클릭할 때마다 다시 실행
             */

            heartButton.classList.remove(
                "liked"
            );

            void heartButton.offsetWidth;

            heartButton.classList.add(
                "liked"
            );
        }
    );
}
