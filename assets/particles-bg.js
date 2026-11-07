/* particles-bg.js — 全站背景粒子层（旧站画法，慢速 + 鼠标跟随）
 *
 * 底子取自旧站 assets/js/main.js：白色五边形粒子 / 连线。
 * 相对旧站的调整：速度 6 → 1.4（慢速漂浮），不透明度下调（当背景用，不抢文字），
 * 开启鼠标交互（detect_on: 'window' —— 粒子层在内容之下且 pointer-events:none，
 * 只有监听 window 才能在整页收起 mousemove）。
 */
particlesJS('particles-js', {
  particles: {
    number: { value: 70, density: { enable: true, value_area: 900 } },
    color: { value: '#ffffff' },
    shape: { type: 'polygon', stroke: { width: 0, color: '#000000' }, polygon: { nb_sides: 5 } },
    opacity: { value: 0.3, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
    size: { value: 2.6, random: true, anim: { enable: false, speed: 19.18, size_min: 0.4, sync: false } },
    line_linked: { enable: true, distance: 200, color: '#ffffff', opacity: 0.22, width: 1 },
    move: {
      enable: true, speed: 1.4, direction: 'none', random: true, straight: false,
      out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: 'window',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: { distance: 240, line_linked: { opacity: 0.5 } },
      bubble: { distance: 300, size: 30, duration: 2, opacity: 4, speed: 2 },
      repulse: { distance: 160, duration: 0.4 },
      push: { particles_nb: 3 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});
