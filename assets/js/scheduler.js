/**
 * Camp Meeting 2026 — Schedule Reveal Engine
 * The Apostolic Church – Ghana | Central Region Zone 1
 * Authentic client-side reveal engine based on Ghana Local Time (GMT/UTC+00:00).
 * Clean, professional, zero emojis.
 */

(function () {
  'use strict';

  const DEFAULT_SCHEDULE = {
    eventName: "Youth and Children's Camp Meeting 2026",
    church: "The Apostolic Church – Ghana",
    region: "Central Region Zone 1 (Agona Swedru & Winneba-Apam Areas)",
    theme: "Run To Win!",
    scripture: "1 Corinthians 9:24-26",
    venue: "Swedru School of Business (SWESBUS), Agona Swedru, Ghana",
    timezone: "UTC",
    utcOffsetHours: 0,
    eventStart: "2026-09-03T09:00:00Z",
    eventEnd: "2026-09-06T15:00:00Z",
    preEvent: {
      title: "Arrival & Camp Registration at SWESBUS",
      badge: "Coming Up Today",
      highlight: "Registration Desks Open at 3:00 PM GMT",
      message: "Campers and delegates from all districts across Agona Swedru Area and Winneba-Apam Area are arriving at the Swedru School of Business campus. Check in at the administration block to pick up your camp tag, room allocation, and study booklet.",
      dressCode: "Travel comfortably and decently.",
      tip: "Have your registration fee ready (GH₵200 Regular / GH₵150 Under 13 / GH₵120 Non-residential). Pack your Bible, notebook, bedsheets, and sportswear for Saturday."
    },
    postEvent: {
      title: "Camp Meeting 2026 Has Concluded — Run To Win!",
      badge: "Thanksgiving & Consecration",
      highlight: "The Race Continues in Your Local Assembly",
      message: "Glorious thanks to God Almighty for an impactful, spirit-filled camp at SWESBUS! Keep running with endurance, discipline, and purpose. May the Lord bless and empower you to finish your race victoriously.",
      actionText: "Read Pastoral Farewell & Messages",
      actionLink: "pages/messages.html"
    },
    reveals: [
      {
        id: "welcome",
        revealAt: "2026-09-03T15:00:00Z",
        expireAt: "2026-09-03T18:00:00Z",
        badge: "3:00 PM • Arrival & Welcome",
        title: "Official Leadership Welcome & Arrival Check-in",
        speaker: "Ps. Enoch Bortey Offei (National Youth Leader) & Aps. Andrews Nortey (Superintendent)",
        verse: "1 Corinthians 9:24 — 'Do you not know that in a race all the runners run, but only one gets the prize? Run in such a way as to get the prize.'",
        teaser: "Official welcome message from the National Youth Leader and hostel check-in guidelines unlock at 3:00 PM GMT.",
        summary: "Camp registration is open at the SWESBUS hostel premises.",
        contentHtml: "<p><strong>Dear Beloved Youth & Children,</strong></p><p>It gives us immense joy and holy excitement to welcome every delegate, camper, minister, and volunteer to the <strong>2026 Central Region Zone 1 Youth and Children's Camp Meeting</strong> at Swedru School of Business!</p><p>As our National Youth Leader <strong>Ps. Enoch Bortey Offei</strong> writes: <em>'The journey of life is not a casual walk but a purposeful race. Champions are not created by chance; they are built through discipline, perseverance, sacrifice, and a determination to finish well.'</em></p><p>Superintendent <strong>Aps. Andrews Nortey</strong> charges us: <em>'The one who runs to win goes into strict training (1 Cor. 9:25). Run in such a way that you may obtain the incorruptible crown.'</em></p><p><strong>Arrival Instructions:</strong> Proceed to the registration desks at the main administration block to collect your tag, hostel allotment, and study materials. Freshen up and prepare for the 6:00 PM opening service!</p>",
        actionText: "Read Full Welcome Messages →",
        actionLink: "pages/messages.html#welcome-leader"
      },
      {
        id: "evening-service",
        revealAt: "2026-09-03T18:00:00Z",
        expireAt: "2026-09-03T22:00:00Z",
        badge: "6:00 PM • Opening Service",
        title: "Evening Opening Service: 'Everyone Born of God...'",
        speaker: "Area Leadership & Opening Preacher",
        verse: "1 John 5:4 — 'For everyone born of God overcomes the world. This is the victory that has overcome the world, even our faith.'",
        teaser: "Tonight's order of service, scripture focus, and hostel rules unlock at 6:00 PM GMT.",
        summary: "Join us in the main auditorium for our first gathering of Camp 2026.",
        contentHtml: "<div class='order-of-service-list'><h4>Order of Opening Service:</h4><ol><li>Opening Prayer</li><li>Opening Praise & Hymn</li><li>High Worship & Atmosphere Shift</li><li>Introduction of Guests & Area Superintendents</li><li>Special Song Ministration</li><li><strong>Opening Talk:</strong> <em>'Everyone Born of God...' (1 John 5:4)</em></li><li>Offertory & Thanksgiving</li><li>Camp Announcements & Hostel Guidelines</li><li>Closing Prayer & Benediction</li></ol><p style='font-size:0.88rem; color:var(--text-muted); margin-top:0.5rem;'><strong>Hostel Notice:</strong> Lights out is strictly at 10:00 PM. Rest well ahead of Friday's 5:00 AM Dawn Devotion.</p></div>",
        actionText: "View Full Camp Timetable →",
        actionLink: "pages/schedule.html"
      },
      {
        id: "friday-morning",
        revealAt: "2026-09-03T22:00:00Z",
        expireAt: "2026-09-04T12:30:00Z",
        badge: "Friday Morning • Day 2",
        title: "Main Talk 1: 'Run Differently: Lay Aside Every Weight and Sin'",
        speaker: "Ministers & Facilitators",
        verse: "Hebrews 12:1; 1 Corinthians 9:24; 2 Corinthians 5:17",
        teaser: "Friday morning session details and action group discussion questions unlock tonight after lights out.",
        summary: "Friday Day 2 focuses on laying aside distractions and pressing into God.",
        contentHtml: "<p>Day 2 kicks off early with <strong>5:00 AM Dawn Devotion</strong> followed by <strong>7:00 AM Start Right</strong> devotion in 1 Peter 1.</p><p>At <strong>8:00 AM</strong>, Main Talk 1 explores the distinction between <em>weights</em> (neutral habits and hindrances that slow spiritual momentum) and <em>sins</em> (falling short of God's glory).</p><p>At <strong>11:30 AM</strong>, join the <strong>Hour of Breakthrough & Deliverance</strong> based on John 8:36: <em>'If the Son sets you free, you will be free indeed.'</em></p>",
        actionText: "Open Study 1 Outline →",
        actionLink: "pages/messages.html#study-1"
      },
      {
        id: "friday-outreach",
        revealAt: "2026-09-04T12:30:00Z",
        expireAt: "2026-09-04T22:00:00Z",
        badge: "Friday Afternoon & Night",
        title: "Community Outreach (Oteipirow) & Career Symposium",
        speaker: "Youth Ministry Facilitators & Guest Speakers",
        verse: "Romans 10:14-15; 1 Timothy 4:12",
        teaser: "Friday community evangelism deployment and Career Night details unlock at 12:30 PM.",
        summary: "Evangelism in Oteipirow at 2:00 PM; Career Symposium at 6:30 PM.",
        contentHtml: "<p><strong>2:00 PM – 5:00 PM:</strong> Evangelistic deployment into Oteipirow town! Campers are deploying in organized teams to win souls for Christ Jesus. Dress code: Decent, comfortable walking attire.</p><p><strong>6:30 PM:</strong> Inspirational Night — Career Choices, Personal Branding, and Vocational Excellence. Dress code: <em>Rep Your School (JHS/SHS/Tertiary) OR Rep Your Jersey!</em></p>",
        actionText: "Explore Activities & Dress Codes →",
        actionLink: "pages/activities.html"
      },
      {
        id: "saturday-events",
        revealAt: "2026-09-04T22:00:00Z",
        expireAt: "2026-09-05T22:00:00Z",
        badge: "Saturday Day 3",
        title: "Bible Studies 2 & 3, Inter-District Games & Bonfire Night",
        speaker: "Overseer Jerry Dzirasah & Guest Speakers",
        verse: "1 Corinthians 9:26-27; Hebrews 12:1c",
        teaser: "Saturday timetable, sports fixtures, and Bonfire Night details unlock Friday evening.",
        summary: "A full day of empowerment, sports at 2:00 PM, and the Camp Bonfire at 9:00 PM.",
        contentHtml: "<p><strong>Morning (7:00 AM - 12:30 PM):</strong> Start Right Talk 2 ('No More Shadowboxing') and Main Talk 3 ('Run With Endurance: Finish Well'), followed by Hour of Breakthrough ministrations.</p><p><strong>Afternoon (2:00 PM):</strong> Inter-district sports, athletics, football, and team bonding games on SWESBUS grounds. Dress code: Sports/Casual.</p><p><strong>Night (6:30 PM & 9:00 PM):</strong> Inspirational Night tackling lifestyle and substance addictions, followed by the Camp Bonfire & Variety Night at 9:00 PM. Dress code: <em>Old School / Throwback / Retro Outfits!</em></p>",
        actionText: "View Saturday Schedule →",
        actionLink: "pages/schedule.html#saturday"
      },
      {
        id: "sunday-climax",
        revealAt: "2026-09-05T22:00:00Z",
        expireAt: "2026-09-06T15:00:00Z",
        badge: "Sunday Grand Climax",
        title: "Sunday Climax Service: 'Run To Win' (1 Cor 9:24–26)",
        speaker: "Area Superintendent & Apostolic Leadership",
        verse: "1 Corinthians 9:24–26 — 'Everyone who competes in the games goes into strict training... we do it to get a crown that will last forever.'",
        teaser: "Sunday Grand Climax Service order of service unlocks Saturday night.",
        summary: "The pinnacle service of Camp Meeting 2026. All districts unite in official camp t-shirts.",
        contentHtml: "<p><strong>Climax Service Program:</strong></p><p>Join the grand convocation at 8:00 AM. Dress code: Official <em>'Run To Win'</em> Camp T-shirt.</p><p>Highlights include mass choir song ministration, presentation of camp awards, recognition of distinguished leaders, the powerful climax sermon, and the prophetic <em>'As You Go'</em> impartation!</p>",
        actionText: "Read Climax Service Details →",
        actionLink: "pages/schedule.html#sunday"
      }
    ]
  };

  class CampScheduler {
    constructor() {
      this.config = DEFAULT_SCHEDULE;
      this.simulatedTime = null;
      this.scheduledTimers = [];
      this.intervalId = null;
      this.init();
    }

    async init() {
      this.checkUrlSimulation();
      await this.loadConfig();
      this.setupOrganizerUI();
      this.render();
      this.startClock();
    }

    checkUrlSimulation() {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const previewTime = urlParams.get('previewTime');
        const previewState = urlParams.get('previewState');

        if (previewTime) {
          const parsed = new Date(previewTime).getTime();
          if (!isNaN(parsed)) {
            this.simulatedTime = parsed;
          }
        } else if (previewState) {
          this.setPresetState(previewState);
        }
      } catch (e) {
        console.warn('URL check:', e);
      }
    }

    setPresetState(state) {
      switch (state) {
        case 'countdown':
        case 'pre-event':
        case 'pre':
          this.simulatedTime = new Date('2026-09-03T12:00:00Z').getTime();
          break;
        case 'welcome':
        case '3pm':
          this.simulatedTime = new Date('2026-09-03T15:05:00Z').getTime();
          break;
        case 'evening':
        case '6pm':
          this.simulatedTime = new Date('2026-09-03T18:15:00Z').getTime();
          break;
        case 'friday':
          this.simulatedTime = new Date('2026-09-04T09:00:00Z').getTime();
          break;
        case 'saturday':
          this.simulatedTime = new Date('2026-09-05T14:30:00Z').getTime();
          break;
        case 'sunday':
          this.simulatedTime = new Date('2026-09-06T09:00:00Z').getTime();
          break;
        case 'concluded':
          this.simulatedTime = new Date('2026-09-06T18:00:00Z').getTime();
          break;
        case 'real':
          this.simulatedTime = null;
          break;
      }
    }

    async loadConfig() {
      try {
        const isPagesDir = window.location.pathname.includes('/pages/');
        const fetchPath = isPagesDir ? '../schedule.json' : 'schedule.json';
        const res = await fetch(fetchPath, { cache: 'no-store' });
        if (res.ok) {
          const remoteConfig = await res.json();
          if (remoteConfig && remoteConfig.reveals) {
            this.config = remoteConfig;
          }
        }
      } catch (err) {
        // Embedded config active
      }
    }

    getCurrentTime() {
      return this.simulatedTime !== null ? this.simulatedTime : Date.now();
    }

    startClock() {
      if (this.intervalId) clearInterval(this.intervalId);

      this.intervalId = setInterval(() => {
        if (this.simulatedTime !== null) {
          this.simulatedTime += 1000;
        }
        this.renderCountdownTimers();
      }, 1000);

      this.scheduleExactTimeouts();
    }

    scheduleExactTimeouts() {
      this.scheduledTimers.forEach(t => clearTimeout(t));
      this.scheduledTimers = [];

      const now = this.getCurrentTime();
      this.config.reveals.forEach(item => {
        const revealTime = new Date(item.revealAt).getTime();
        const diff = revealTime - now;
        if (diff > 0 && diff < 86400000 * 5) {
          const timer = setTimeout(() => {
            this.render();
          }, diff);
          this.scheduledTimers.push(timer);
        }
      });
    }

    formatTimeRemaining(diffMs) {
      if (diffMs <= 0) return '00:00:00';
      const totalSec = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSec / 86400);
      const hours = Math.floor((totalSec % 86400) / 3600);
      const mins = Math.floor((totalSec % 3600) / 60);
      const secs = totalSec % 60;

      const pad = n => String(n).padStart(2, '0');

      if (days > 0) {
        return `${days}d ${pad(hours)}h ${pad(mins)}m ${pad(secs)}s`;
      }
      return `${pad(hours)}h ${pad(mins)}m ${pad(secs)}s`;
    }

    renderCountdownTimers() {
      const now = this.getCurrentTime();

      const heroTimerEl = document.getElementById('hero-countdown-timer');
      const heroStatusEl = document.getElementById('hero-stage-status');

      if (heroTimerEl) {
        const welcomeRevealTime = new Date(this.config.reveals[0].revealAt).getTime();
        const eventEndTime = new Date(this.config.eventEnd).getTime();

        if (now < welcomeRevealTime) {
          const diff = welcomeRevealTime - now;
          heroTimerEl.innerHTML = this.buildTimerDigits(diff);
          if (heroStatusEl) heroStatusEl.textContent = 'Camp Starts Thursday • 3:00 PM GMT';
        } else if (now >= welcomeRevealTime && now < eventEndTime) {
          const activeReveal = [...this.config.reveals].reverse().find(r => now >= new Date(r.revealAt).getTime());
          const nextReveal = this.config.reveals.find(r => now < new Date(r.revealAt).getTime());

          if (heroStatusEl && activeReveal) {
            heroStatusEl.innerHTML = `<span class="live-pulse"></span> Happening Now: ${activeReveal.title}`;
          }

          if (nextReveal) {
            const diffNext = new Date(nextReveal.revealAt).getTime() - now;
            heroTimerEl.innerHTML = `
              <div style="font-size:0.8rem; font-weight:700; color:var(--brand-orange); margin-bottom:0.35rem; text-transform:uppercase;">Next Session Unlocks In:</div>
              ${this.buildTimerDigits(diffNext)}
            `;
          } else {
            heroTimerEl.innerHTML = `<div style="font-weight:800; color:var(--brand-navy); padding:1rem 0; font-size:1.1rem;">Camp Meeting in Session</div>`;
          }
        } else {
          if (heroStatusEl) heroStatusEl.textContent = 'Camp Meeting Concluded';
          heroTimerEl.innerHTML = `<div style="font-weight:800; color:var(--brand-navy); padding:1rem 0; font-size:1.1rem;">Run To Win &bull; Glory to God!</div>`;
        }
      }

      this.config.reveals.forEach(item => {
        const revealTime = new Date(item.revealAt).getTime();
        const countdownSpan = document.querySelector(`.reveal-countdown[data-reveal-id="${item.id}"]`);
        if (countdownSpan) {
          const diff = revealTime - now;
          if (diff > 0) {
            countdownSpan.textContent = this.formatTimeRemaining(diff);
          } else {
            this.render();
          }
        }
      });

      const simClockDisplay = document.getElementById('sim-clock-display');
      if (simClockDisplay) {
        simClockDisplay.textContent = new Date(now).toUTCString().replace('GMT', 'GMT (Ghana Time)');
      }
    }

    buildTimerDigits(diffMs) {
      if (diffMs <= 0) return '<div style="font-weight:800; color:var(--brand-green); font-size:1.2rem; padding:0.5rem 0;">Unlocked Now</div>';
      const totalSec = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSec / 86400);
      const hours = Math.floor((totalSec % 86400) / 3600);
      const mins = Math.floor((totalSec % 3600) / 60);
      const secs = totalSec % 60;

      const pad = n => String(n).padStart(2, '0');

      return `
        <div class="countdown-digits-grid">
          <div class="digit-box"><span class="digit-value">${pad(days)}</span><span class="digit-caption">DAYS</span></div>
          <span class="digit-colon">:</span>
          <div class="digit-box"><span class="digit-value">${pad(hours)}</span><span class="digit-caption">HOURS</span></div>
          <span class="digit-colon">:</span>
          <div class="digit-box"><span class="digit-value">${pad(mins)}</span><span class="digit-caption">MINS</span></div>
          <span class="digit-colon">:</span>
          <div class="digit-box"><span class="digit-value">${pad(secs)}</span><span class="digit-caption">SECS</span></div>
        </div>
      `;
    }

    render() {
      const now = this.getCurrentTime();
      const container = document.getElementById('live-reveals-container');
      if (!container) return;

      const firstReveal = new Date(this.config.reveals[0].revealAt).getTime();
      const eventEnd = new Date(this.config.eventEnd).getTime();

      let html = '';

      if (now < firstReveal) {
        html += `
          <div class="feed-banner pre-camp">
            <div class="feed-banner-status">${this.config.preEvent.badge}</div>
            <h3 class="feed-banner-title">${this.config.preEvent.title}</h3>
            <p class="feed-banner-highlight">${this.config.preEvent.highlight}</p>
            <p class="feed-banner-text">${this.config.preEvent.message}</p>
            <div class="camp-packing-tips">
              <p><strong>Arrival Dress Code:</strong> ${this.config.preEvent.dressCode}</p>
              <p><strong>Camper Checklist:</strong> ${this.config.preEvent.tip}</p>
            </div>
          </div>
        `;
      } else if (now >= eventEnd) {
        html += `
          <div class="feed-banner post-camp">
            <div class="feed-banner-status" style="color:var(--brand-green); justify-content:center;">${this.config.postEvent.badge}</div>
            <h3 class="feed-banner-title">${this.config.postEvent.title}</h3>
            <p class="feed-banner-highlight">${this.config.postEvent.highlight}</p>
            <p class="feed-banner-text">${this.config.postEvent.message}</p>
            <a href="${this.config.postEvent.actionLink}" class="btn btn-primary">${this.config.postEvent.actionText} &rarr;</a>
          </div>
        `;
      }

      this.config.reveals.forEach(item => {
        const revealTime = new Date(item.revealAt).getTime();
        const expireTime = item.expireAt ? new Date(item.expireAt).getTime() : revealTime + 3600000 * 4;
        const isRevealed = now >= revealTime;
        const isCurrentlyActive = isRevealed && now < expireTime;

        if (isRevealed) {
          html += `
            <article class="reveal-card ${isCurrentlyActive ? 'card-currently-active' : ''}" id="reveal-${item.id}">
              <div class="reveal-card-top">
                <span class="status-pill ${isCurrentlyActive ? 'live' : 'unlocked'}">
                  ${isCurrentlyActive ? '<span class="live-pulse"></span> Happening Now' : '✓ Unlocked'} &bull; ${item.badge}
                </span>
                <span class="reveal-timestamp">${new Date(item.revealAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT</span>
              </div>
              <h3 class="reveal-heading">${item.title}</h3>
              ${item.speaker ? `<p class="reveal-speaker-line">${item.speaker}</p>` : ''}
              ${item.verse ? `<blockquote class="reveal-scripture-box">${item.verse}</blockquote>` : ''}
              <div class="reveal-body">
                ${item.contentHtml}
              </div>
              ${item.actionLink ? `
                <div class="reveal-card-actions">
                  <a href="${item.actionLink}" class="btn btn-secondary btn-sm">${item.actionText}</a>
                </div>
              ` : ''}
            </article>
          `;
        } else {
          const diff = revealTime - now;
          html += `
            <article class="reveal-card reveal-card-locked" id="reveal-${item.id}">
              <div class="reveal-card-top">
                <span class="status-pill locked">Upcoming &bull; ${item.badge}</span>
                <span class="reveal-timestamp">Unlocks at ${new Date(item.revealAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} GMT</span>
              </div>
              <h3 class="reveal-heading">${item.title}</h3>
              <p style="color:var(--text-muted); font-size:0.95rem;">${item.teaser}</p>
              <div class="locked-countdown-row">
                <span>Unlocks in:</span> <strong class="reveal-countdown" data-reveal-id="${item.id}" style="color:var(--brand-orange); margin-left:4px;">${this.formatTimeRemaining(diff)}</strong>
              </div>
            </article>
          `;
        }
      });

      container.innerHTML = html;
    }

    setupOrganizerUI() {
      const container = document.createElement('div');
      container.className = 'organizer-test-tab';
      container.id = 'organizer-test-tab';

      container.innerHTML = `
        <button type="button" class="organizer-tab-btn" id="organizer-toggle-btn" title="Organizer testing controls">
          <span>Schedule Simulation</span>
        </button>
        <div class="organizer-panel" id="organizer-panel">
          <h4>Organizer Clock Simulation</h4>
          <p>Test each program milestone instantly without waiting for Thursday.</p>
          <div style="background:var(--surface-alt); padding:0.4rem 0.6rem; border-radius:4px; font-size:0.75rem; margin-bottom:0.65rem;">
            <strong>Clock:</strong> <span id="sim-clock-display">Loading...</span>
          </div>
          <div class="organizer-presets-list">
            <button type="button" class="preset-btn" data-preset="countdown">1. Thursday Morning (&lt; 3 PM)</button>
            <button type="button" class="preset-btn" data-preset="welcome">2. 3:00 PM (Welcome Live)</button>
            <button type="button" class="preset-btn" data-preset="evening">3. 6:00 PM (Opening Service Live)</button>
            <button type="button" class="preset-btn" data-preset="friday">4. Friday Sessions</button>
            <button type="button" class="preset-btn" data-preset="saturday">5. Saturday Games &amp; Bonfire</button>
            <button type="button" class="preset-btn" data-preset="sunday">6. Sunday Climax Service</button>
            <button type="button" class="preset-btn" data-preset="real" style="color:#991b1b; background:#fef2f2; border-color:#fecaca; margin-top:4px;">Reset to Live Clock</button>
          </div>
        </div>
      `;

      document.body.appendChild(container);

      const toggleBtn = document.getElementById('organizer-toggle-btn');
      toggleBtn.addEventListener('click', () => {
        container.classList.toggle('is-open');
      });

      container.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const preset = e.target.getAttribute('data-preset');
          this.setPresetState(preset);
          this.render();
          this.scheduleExactTimeouts();

          container.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
          if (preset !== 'real') e.target.classList.add('active');
        });
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.campScheduler = new CampScheduler();
    });
  } else {
    window.campScheduler = new CampScheduler();
  }
})();
