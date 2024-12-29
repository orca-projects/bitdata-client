import './collect.css';

const collectHistory = async function () {
    try {
        await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch('/collect/history', {
            method: 'GET',
        });

        if (response.ok) {
            collectionSusccess();
        } else {
            collectionFail();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
    }
};

const collectionSusccess = function () {
    window.location.href = '/history';
};

const collectionFail = async function () {
    const $statusImage = document.querySelector('.status-image');
    const $statusText = document.querySelector('.status');
    const $noticeText = document.querySelector('.notice');

    $statusImage.innerHTML = `<img src="/assets/images/notice_icon.png" alt="경고 표시">`;

    $statusText.innerHTML = `데이터 수집 불가`;
    $statusText.classList.add('fail');

    $noticeText.innerHTML = `바이낸스 계정 연동 상태를 확인해주세요!`;

    await new Promise((resolve) => setTimeout(resolve, 3000));

    window.location.href = '/setting';
};

document.addEventListener('DOMContentLoaded', () => {
    collectHistory();
});
