import React, { useEffect } from 'react';

export default function GlassCursor() {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.className = 'glass-cursor hidden lg:flex';
        cursor.innerHTML = `
<div class="glass-cursor__inner">
<div class="glass-cursor__shine"></div>
<div class="absolute inset-0 flex items-center justify-center">
<div class="glass-cursor__dot"></div>
</div>
</div>`;
        document.body.appendChild(cursor);


        document.documentElement.classList.add('custom-cursor-enabled');


        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;
        const lerp = (a, b, n) => (1 - n) * a + n * b;
        const ease = 0.18;


        function onMove(e) { mouseX = e.clientX; mouseY = e.clientY; }
        function onDown() { cursor.classList.add('active'); }
        function onUp() { cursor.classList.remove('active'); }
        const hoverSelectors = 'a, button, input, textarea, select, label, [data-cursor-hover]';
        function onPointerOver(e) { if (e.target.closest(hoverSelectors)) cursor.classList.add('hover'); }
        function onPointerOut(e) { if (e.target.closest(hoverSelectors)) cursor.classList.remove('hover'); }


        function render() {
            cursorX = lerp(cursorX, mouseX, ease);
            cursorY = lerp(cursorY, mouseY, ease);
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate3d(-50%, -50%, 0)`;
            requestAnimationFrame(render);
        }


        function start(e) {
            cursor.style.opacity = '1';
            mouseX = e.clientX; mouseY = e.clientY; cursorX = mouseX; cursorY = mouseY;
            render();
            window.removeEventListener('mousemove', start);
        }


        window.addEventListener('mousemove', start, { passive: true });
        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mousedown', onDown, true);
        window.addEventListener('mouseup', onUp, true);
        document.addEventListener('mouseover', onPointerOver, true);
        document.addEventListener('mouseout', onPointerOut, true);


        return () => {
            cursor.remove();
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            document.removeEventListener('mouseover', onPointerOver);
            document.removeEventListener('mouseout', onPointerOut);
        };
    }, []);


    return null;
}