//Time
function updateTime() {
  const footerTime = document.getElementById("time");
  const currentTime = new Date();
  const localTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  footerTime.innerHTML = `${localTime}`;
}
updateTime();
setInterval(updateTime, 60000);

//TYPING AND CLICKING AUDIOS
const iconClickSound = document.getElementById("iconClickSound");
function playIconClickSound() {
  iconClickSound.currentTime = 0;
  iconClickSound.volume = 0.2;
  iconClickSound.play();
}
const typingSound1 = document.getElementById("typingSound1");
const typingSound2 = document.getElementById("typingSound2");
const typingSound3 = document.getElementById("typingSound3");
const typingSound4 = document.getElementById("typingSound4");
typingSound1.volume = 0.2;
typingSound2.volume = 0.2;
typingSound3.volume = 0.2;
typingSound4.volume = 0.2;
let typingSoundCounter = 0;

function playTypingSound() {
  typingSoundCounter++;
  if (typingSoundCounter > 4) {
    typingSoundCounter = 1;
  }

  if (typingSoundCounter === 1) {
    typingSound1.currentTime = 0;
    typingSound1.play();
  } else if (typingSoundCounter === 2) {
    typingSound2.currentTime = 0;
    typingSound2.play();
  } else if (typingSoundCounter === 3) {
    typingSound3.currentTime = 0;
    typingSound3.play();
  } else {
    typingSound4.currentTime = 0;
    typingSound4.play();
  }
}

//Start Menu
const startBtn = document.getElementById("start-btn");
const startMenu = document.getElementById("start-menu");

startBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  startMenu.classList.toggle("hidden");
  playIconClickSound();
});

//Close menu if clicking outside
document.addEventListener("click", (e) => {
  if (!startMenu.contains(e.target) && e.target !== startBtn) {
    startMenu.classList.add("hidden");
  }
});

//Desktop icons (to add focus on icons when clicking on them)
const desktopIcons = document.querySelectorAll(".icons");
desktopIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.stopPropagation();
    desktopIcons.forEach((div) => {
      div.style.backgroundColor = "";
    });

    icon.style.backgroundColor = "#d3d3d3b4";
    playIconClickSound();
  });
});

//Close the focus when clicking outside
document.addEventListener("click", () => {
  desktopIcons.forEach((icon) => {
    icon.style.backgroundColor = "";
  });
});

//desktop my computer window
const icon_C = document.getElementById("myComputer");
const windowEl_C = document.getElementById("myComputerWindow");

icon_C.addEventListener("dblclick", () => {
  windowEl_C.style.display = "block";
  windowEl_C.style.zIndex = Date.now();
  attachWindowControls(windowEl_C);
});

//desktop Internet window
const icon_I = document.getElementById("internet");
const windowEl_I = document.getElementById("myInternetWindow");

icon_I.addEventListener("dblclick", () => {
  windowEl_I.style.display = "block";
  windowEl_I.style.zIndex = Date.now();
  attachWindowControls(windowEl_I);
});

//desktop Recycle bin window
const icon_R = document.getElementById("recycleBin");
const windowEl_R = document.getElementById("recycleWindow");

icon_R.addEventListener("dblclick", () => {
  windowEl_R.style.display = "block";
  windowEl_R.style.zIndex = Date.now();
  attachWindowControls(windowEl_R);
});

//desktop Notepad window
const icon_N = document.getElementById("notepad");
const windowEl_N = document.getElementById("notepadWindow");

icon_N.addEventListener("dblclick", () => {
  windowEl_N.style.display = "block";
  windowEl_N.style.zIndex = Date.now();
  attachWindowControls(windowEl_N);
});

//notepad local save
const textArea = document.getElementById("text-notepad");
const savedText = localStorage.getItem("notepadContentt");

if (savedText) {
  textArea.value = savedText;
}
textArea.addEventListener("keypress", () => {
  playTypingSound();
});
textArea.addEventListener("input", () => {
  localStorage.setItem("notepadContentt", textArea.value);
});

//desktop Photos window
const icon_P = document.getElementById("myPhotos");
const windowEl_P = document.getElementById("photosWindow");

icon_P.addEventListener("dblclick", () => {
  windowEl_P.style.display = "block";
  windowEl_P.style.zIndex = Date.now();
  attachWindowControls(windowEl_P);
});

//Documents File PasswordCheck
const correctPassword = "system1998";
const restrictedWindow = document.getElementById("documentsWindow");

// Function to open the password prompt
function promptPassword() {
  const modal = document.getElementById("passwordModal");
  const passwordInput = document.getElementById("password");
  passwordInput.value = "";
  modal.style.display = "flex";
  passwordInput.focus();

  if (passwordInput) {
    passwordInput.addEventListener("keypress", () => {
      playTypingSound();
    });
  }
}

// Function to check the entered password
function checkPassword() {
  const enteredPassword = document.getElementById("password").value;
  const modal = document.getElementById("passwordModal");
  const restrictedWindow = document.getElementById("documentsWindow");
  const inputPass = document.getElementById("password");
  const bg_glitch = document.querySelector(".container");
  const icon_X = document.getElementById("secretFolder");
  const windowEl_X = document.getElementById("XanderHayes");

  // If the entered password is correct
  if (enteredPassword === correctPassword) {
    modal.style.display = "none";
    inputPass.value = "";
    restrictedWindow.style.display = "block";
    attachWindowControls(restrictedWindow);
  } else if (
    enteredPassword === "agent-x" ||
    enteredPassword === "Agent-X" ||
    enteredPassword === "agent-X" ||
    enteredPassword === "Agent-X" ||
    enteredPassword === "agentx" ||
    enteredPassword === "AGENTX" ||
    enteredPassword === "AgentX"
  ) {
    alert(
      "QWQRCK CPPMP!! QWQRCK SNBYRC PCOSGPCB! GL LCCB MD Y PCZMMR GKKCBGYRCJW."
    );
    //and the desktop background changes to be a little glitchy
    localStorage.setItem("agentXUnlocked", "true");
    bg_glitch.style.background = "url('assets/media/bg_glitched.png')";
    icon_X.style.display = "block";
    inputPass.value = "";

    icon_X.addEventListener("dblclick", () => {
      windowEl_X.style.display = "block";
      windowEl_X.style.zIndex = Date.now();
      attachWindowControls(windowEl_X);
    });
  } else {
    alert("Incorrect password! Try again.");
    inputPass.value = "";
  }
}
//Close Password Input window
const closeBtn_PI = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
closeBtn_PI.addEventListener("click", () => {
  modal.style.display = "none";
});

//Logs Window
const icon_L = document.getElementById("logs");
const windowEl_L = document.getElementById("logsWindow");

icon_L.addEventListener("dblclick", () => {
  windowEl_L.style.display = "block";
  windowEl_L.style.zIndex = Date.now();
  attachWindowControls(windowEl_L);
});

//Dragging Windows - Reusable function to attach controls
function attachWindowControls(windowEl) {
  // Only attach listeners if they haven't been attached before
  if (windowEl.dataset.listenersAttached) {
    return;
  }

  const closeBtn = windowEl.querySelector(".close-window-btn");
  const hideBtn = windowEl.querySelector(".hide-window-btn");
  const maximizeBtn = windowEl.querySelector(".maximize-window-btn");
  const titleBar = windowEl.querySelector(".title-bar");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      windowEl.style.display = "none";
      playIconClickSound()
    });
  }

  if (hideBtn) {
    hideBtn.addEventListener("click", () => {
      windowEl.style.display = "none";
      playIconClickSound()
    });
  }

  let originalWidth = windowEl.style.width;
  let originalHeight = windowEl.style.height;
  let originalTop = windowEl.style.top;
  let originalLeft = windowEl.style.left;
  let isMaximized = false;

  if (maximizeBtn) {
    maximizeBtn.addEventListener("click", () => {
      if (!isMaximized) {
        originalWidth = windowEl.style.width;
        originalHeight = windowEl.style.height;
        originalTop = windowEl.style.top;
        originalLeft = windowEl.style.left;

        windowEl.style.width = "100vw";
        windowEl.style.height = "calc(100vh - 40px)";
        windowEl.style.top = "0";
        windowEl.style.left = "0";
        windowEl.style.borderRadius = "0";
        isMaximized = true;
      } else {
        windowEl.style.width = originalWidth;
        windowEl.style.height = originalHeight;
        windowEl.style.top = originalTop;
        windowEl.style.left = originalLeft;
        windowEl.style.borderRadius = "";
        isMaximized = false;
      }
      playIconClickSound()
    });
    
  }

  // Dragging functionality
  if (titleBar) {
    titleBar.onmousedown = function (e) {
      if (isMaximized) return;
      e.preventDefault();

      let shiftX = e.clientX - windowEl.getBoundingClientRect().left;
      let shiftY = e.clientY - windowEl.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
        const windowWidth = windowEl.offsetWidth;
        const windowHeight = windowEl.offsetHeight;

        let newLeft = pageX - shiftX;
        let newTop = pageY - shiftY;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft + windowWidth > screenWidth)
          newLeft = screenWidth - windowWidth;
        if (newTop + windowHeight > screenHeight)
          newTop = screenHeight - windowHeight;

        windowEl.style.position = "absolute";
        windowEl.style.zIndex = Date.now();
        windowEl.style.left = newLeft + "px";
        windowEl.style.top = newTop + "px";
      }

      function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", onMouseMove);
        },
        { once: true }
      );
    };
  }
  windowEl.dataset.listenersAttached = "true";
}

document.addEventListener("DOMContentLoaded", () => {
  const isAgentXUnlocked = localStorage.getItem("agentXUnlocked");
  const bg_glitch = document.querySelector(".container");
  const icon_X = document.getElementById("secretFolder");
  const windowEl_X = document.getElementById("XanderHayes");
  const introScreen = document.getElementById('introScreen');
  const introAudio = document.getElementById('introAudio');
  const startButton = document.getElementById('startButton');
  introAudio.volume = 0.3; 

  startButton.addEventListener('click', () => {
    // Play the audio
    introAudio.play().then(() => {
      introAudio.onended = () => {
        introScreen.classList.add('fade-out');

        introScreen.addEventListener('transitionend', () => {
          introScreen.style.display = 'none';
        }, { once: true });
      };
    }).catch(error => {
      console.error("Audio playback failed:", error);
      introScreen.classList.add('fade-out');
    });

    startButton.style.display = 'none';
    playIconClickSound()
  });

  if (isAgentXUnlocked === "true") {
    if (bg_glitch) {
      bg_glitch.style.background = "url('assets/media/bg_glitched.png')";
    }
    if (icon_X) {
      icon_X.style.display = "block";
      if (windowEl_X) {
        attachWindowControls(windowEl_X);
      }
    }
  }
  document.querySelectorAll(".window").forEach(attachWindowControls);
});

//C DRIVE
const icon_CD = document.getElementById("C-Drive");
const windowEl_CD = document.getElementById("C-Drive-Window");
const old_windowCD = document.getElementById("myComputerWindow");

icon_CD.addEventListener("dblclick", () => {
  windowEl_CD.style.display = "block";
  windowEl_CD.style.zIndex = Date.now();
  old_windowCD.style.display = "none";
  attachWindowControls(windowEl_CD);
});

// D DRIVE MODAL
const modal0 = document.getElementById("adminModal");
const closeBtn_DD = modal0.querySelector(".close-btn");
const ok_btn = document.getElementById("cncl");

let isDDriveUnlocked = localStorage.getItem("isDDriveUnlocked") === "true";

function openDDrive() {
  if (isDDriveUnlocked) {
    const finalMessageWindow = document.querySelector(".FM");
    const closebtn_FM = finalMessageWindow.querySelector(".close-window-btn");

    // Check if the element exists
    if (finalMessageWindow) {
      finalMessageWindow.style.display = "block";
      finalMessageWindow.style.zIndex = Date.now();
      attachWindowControls(finalMessageWindow);
      closebtn_FM.addEventListener("click", () => {
        finalMessageWindow.style.display = "none";
        triggerFadeToBlack();
      });
    }
  } else {
    modal0.style.display = "flex";
    modal0.style.zIndex = Date.now();
  }
}
closeBtn_DD.addEventListener("click", () => {
  modal0.style.display = "none";
});
ok_btn.addEventListener("click", () => {
  modal0.style.display = "none";
});

// Users Folder
const icon_U = document.getElementById("users");
const windowEl_U = document.getElementById("usersFolder");
const old_windowU = document.getElementById("C-Drive-Window");

icon_U.addEventListener("dblclick", () => {
  windowEl_U.style.display = "block";
  windowEl_U.style.zIndex = Date.now();
  old_windowU.style.display = "none";
  attachWindowControls(windowEl_U);
});

//Logs folder in C Drive
const icon_LC = document.getElementById("logss");
const windowEl_LC = document.getElementById("logsInDrive");
const old_windowLC = document.getElementById("C-Drive-Window");

icon_LC.addEventListener("dblclick", () => {
  windowEl_LC.style.display = "block";
  windowEl_LC.style.zIndex = Date.now();
  old_windowLC.style.display = "none";
  attachWindowControls(windowEl_LC);
});

//Logs 1 Window (from C Drive Logs folder)
const icon_L1 = document.getElementById("log1");
const windowEl_L1 = document.querySelector(".dot");

icon_L1.addEventListener("dblclick", () => {
  windowEl_L1.style.display = "block";
  windowEl_L1.style.zIndex = Date.now();
  attachWindowControls(windowEl_L1);
});

//Logs 2 Window (from C Drive Logs folder)
const icon_L2 = document.getElementById("log2");
const windowEl_L2 = document.querySelector(".A12Z6");

icon_L2.addEventListener("dblclick", () => {
  windowEl_L2.style.display = "block";
  windowEl_L2.style.zIndex = Date.now();
  attachWindowControls(windowEl_L2);
});

//Logs 3 Window (from C Drive Logs folder)
const icon_L3 = document.getElementById("log3");
const windowEl_L3 = document.querySelector(".zbefr");

icon_L3.addEventListener("dblclick", () => {
  windowEl_L3.style.display = "block";
  windowEl_L3.style.zIndex = Date.now();
  attachWindowControls(windowEl_L3);
});

// Function to create a generic empty folder window
// Now accepts an optional array of items to display in the rightCol
function createFolderWindow(id, titleText, iconSrc, folderItems = []) {
  let windowEl0 = document.getElementById(id);

  if (windowEl0) {
    windowEl0.style.display = "block";
    windowEl0.style.zIndex = Date.now();
    return windowEl0;
  }

  // Create the window element
  windowEl0 = document.createElement("div");
  windowEl0.className = "window";
  windowEl0.id = id;

  // Generate content for the rightCol based on folderItems
  const rightColContent =
    folderItems.length > 0
      ? folderItems
          .map(
            (item) => `
        <div class="window-elm icons" id="${item.id}">
            <img src="${item.imgSrc}" width="35px" />

            <p>${item.text}</p>
        </div>`
          )
          .join("")
      : '<p style="opacity: 0.5;">This Folder is empty</p>';

  windowEl0.innerHTML = `
        <div class="title-bar">
            <div class="title">
                <img src="${iconSrc}" alt="${titleText} icon" />
                <p>${titleText}</p>
            </div>
            <div class="title-bar-btns">
                <ul>
                    <li>
                        <button class="hide-window-btn"><div></div></button>
                    </li>
                    <li>
                        <button class="maximize-window-btn"><div></div></button>
                    </li>
                    <li><button class="close-window-btn">x</button></li>
                </ul>
            </div>
        </div>
        <div class="windowActions">
            <ul>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">File</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Edit</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">View</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Favorites</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Tools</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Help</button>
                </li>
            </ul>
            <div class="win-icon-box">
                <img src="/assets/media/icons/w.png" alt="Windows Logo" />
            </div>
        </div>
        <div class="window-content">
            <div class="leftCol">
                <div class="comp">
                    <img src="${iconSrc}" />
                    <p style="font-size: 1.2rem"><strong>${titleText}</strong></p>
                </div>
                <div class="windowLinks">
                    <p>See also:</p>
                    <a href="#" style="display: block">My Documents</a>
                    <a href="#" style="display: block">My Network Places</a>
                    <a href="#" style="display: block">Network and Dial-up Connections</a>
                </div>
            </div>
            <div class="rightCol">
              ${rightColContent}
            </div>
        </div>
    `;

  document.body.appendChild(windowEl0);
  attachWindowControls(windowEl0);

  windowEl0.style.display = "block";
  windowEl0.style.zIndex = Date.now();

  return windowEl0;
}

const icon_deskF = document.getElementById("deskF");
const icon_docF = document.getElementById("docF");
const icon_picsF = document.getElementById("picsF");

icon_deskF.addEventListener("dblclick", () => {
  createFolderWindow(
    "desktopFolderWindow",
    "Desktop",
    "/assets/media/icons/directory_closed-5.png"
  );
});

icon_docF.addEventListener("dblclick", () => {
  createFolderWindow(
    "documentsFolderWindow",
    "Documents",
    "/assets/media/icons/directory_closed-5.png"
  );
});

icon_picsF.addEventListener("dblclick", () => {
  createFolderWindow(
    "picturesFolderWindow",
    "Pictures",
    "/assets/media/icons/directory_closed-5.png"
  );
});

//found.txt Window log
const icon_F = document.getElementById("foundTxt");
const windowEl_F = document.querySelector(".found");

icon_F.addEventListener("dblclick", () => {
  windowEl_F.style.display = "block";
  windowEl_F.style.zIndex = Date.now();
  attachWindowControls(windowEl_F);
});

//Notes folder Window log
const icon_NF = document.getElementById("notes");
const windowEl_NF = document.getElementById("NotesInDrive");
const old_windowNF = document.getElementById("C-Drive-Window");

icon_NF.addEventListener("dblclick", () => {
  windowEl_NF.style.display = "block";
  windowEl_NF.style.zIndex = Date.now();
  old_windowNF.style.display = "none";
  attachWindowControls(windowEl_NF);
});

//DO NOT OPEN .TXT (from Notes folder)
const icon_NO = document.getElementById("dontOpen");
const windowEl_NO = document.querySelector(".note");

icon_NO.addEventListener("dblclick", () => {
  windowEl_NO.style.display = "block";
  windowEl_NO.style.zIndex = Date.now();
  attachWindowControls(windowEl_NO);
});

//Key.png (from C Drive)
const icon_KI = document.getElementById("key");
const windowEl_KI = document.getElementById("png");

icon_KI.addEventListener("dblclick", () => {
  windowEl_KI.style.display = "block";
  windowEl_KI.style.zIndex = Date.now();
  attachWindowControls(windowEl_KI);
});

//Internet Explorer Search Logic
const searchBox = document.getElementById("search-box");
const googleSearchBtn = document.getElementById("google-search-btn");
const phoenixProtocolWindow = document.getElementById("phoenixProtocolWindow");
const noInternetWindow = document.getElementById("noInternetWindow");

googleSearchBtn.addEventListener("click", () => {
  const searchTerm = searchBox.value.trim().toLowerCase();
  windowEl_I.style.display = "none";

  if (searchTerm === "phoenix protocol") {
    phoenixProtocolWindow.style.display = "block";
    phoenixProtocolWindow.style.zIndex = Date.now();
    attachWindowControls(phoenixProtocolWindow);
  } else {
    noInternetWindow.style.display = "block";
    noInternetWindow.style.zIndex = Date.now();
    attachWindowControls(noInternetWindow);
  }
  searchBox.value = "";
});
if (searchBox) {
  searchBox.addEventListener("keypress", () => {
    playTypingSound();
  });
}

//log1 in recycle bin
const icon_R1 = document.getElementById("recycleTxt1");
const windowEl_R1 = document.querySelector(".imp");

icon_R1.addEventListener("dblclick", () => {
  windowEl_R1.style.display = "block";
  windowEl_R1.style.zIndex = Date.now();
  attachWindowControls(windowEl_R1);
});

//log2 in recycle bin
const icon_R2 = document.getElementById("recycleTxt2");
const windowEl_R2 = document.querySelector(".sys");
icon_R2.addEventListener("dblclick", () => {
  windowEl_R2.style.display = "block";
  windowEl_R2.style.zIndex = Date.now();
  attachWindowControls(windowEl_R2);
});

// Function to create a generic window for the 3 photos in photos
function createPhotoWindow(id, titleText, imgSrc) {
  let windowEl_PD = document.getElementById(id);

  if (windowEl_PD) {
    windowEl_PD.style.display = "block";
    windowEl_PD.style.zIndex = Date.now();
    return windowEl_PD;
  }

  windowEl_PD = document.createElement("div");
  windowEl_PD.className = "window";
  windowEl_PD.id = id;
  windowEl_PD.style.width = "35rem";
  windowEl_PD.style.height = "25rem";

  windowEl_PD.innerHTML = `
        <div class="title-bar">
            <div class="title">
                <img src="/assets/media/icons/wia_img_color-0.png" alt="${titleText} icon" />
                <p>${titleText}</p>
            </div>
            <div class="title-bar-btns">
                <ul>
                    <li>
                        <button class="hide-window-btn"><div></div></button>
                    </li>
                    <li>
                        <button class="maximize-window-btn"><div></div></button>
                    </li>
                    <li><button class="close-window-btn">x</button></li>
                </ul>
            </div>
        </div>
        <div class="windowActions">
            <ul>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">File</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Edit</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">View</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Favorites</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Tools</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Help</button>
                </li>
            </ul>
            <div class="win-icon-box">
                <img src="/assets/media/icons/w.png" alt="Windows Logo" />
            </div>
        </div>
        <div class="window-content-photo">
            <img src="${imgSrc}" alt="${titleText}" />
        </div>
    `;

  document.body.appendChild(windowEl_PD);
  attachWindowControls(windowEl_PD);

  windowEl_PD.style.display = "block";
  windowEl_PD.style.zIndex = Date.now();

  return windowEl_PD;
}

const iconPhoto1 = document.getElementById("first");
const iconPhoto2 = document.getElementById("second");
const iconPhoto3 = document.getElementById("third");

iconPhoto1.addEventListener("dblclick", () => {
  createPhotoWindow("Photo1", "img.jpg", "/assets/media/storyImgs/img.jpg.jpg");
});

iconPhoto2.addEventListener("dblclick", () => {
  createPhotoWindow(
    "Photo2",
    "corrupted_01",
    "/assets/media/storyImgs/corrupted_01.jpg"
  );
});

iconPhoto3.addEventListener("dblclick", () => {
  createPhotoWindow(
    "Photo3",
    "corrupted_02",
    "/assets/media/storyImgs/corrupted_02.jpg"
  );
});

// --- Dynamic Text File Windows (for Documents folder) ---
// Define the content for each text file
const textFileContents = {
  recovery: `Psw’fz eckfwv hciic esy. Ppx ssimgr zzvl uigdzv rpv jkzzw kfvc psqii urrvsy cfs ks usz — vvkeephn sw ryi Rvjiego Ttcostmc, spqz lrlupgr jrcw sc Cuzrk-V sihcmi kfv hkgvtgcrvcbxi.

Kfv epgriiq nsp’h xsdc rpn oo seav. Xjs ovlry acg avrediphzh, vltvadoiu, yeh uqvxkciif oxvfqj xjs ncjrvq vc kvfrvgv wo jimd fgwik wmlrf hjs vyjmnm.
  
Nsfl, jsosolzlx akzg xigxkgf. Vru uyip wo hfcj, mv kdpc pvatwoi vtvvahcmee psw hcsleyx acp oecn.`,

  fracture_note: `There’s something here — in plain sight.  
  And that’s what makes it work.
  
  They didn’t hide it behind firewalls or passwords. No encryption. 
  Just access an permission. 
  They just gave it a name so boring no one would bother to open it.  
  
  I spent days tearing through system logs, config caches, everything.  
  Until I realized: the secret isn’t hidden from the machine.  
  It’s hidden from *you*.
  
  Whatever’s stored there — it’s not just data.  
  It’s a record.  
  Of choices. Of people. Of what really happened.  
  Maybe even why you were brought here to begin with.
  
  I can’t tell you how to open it. Only that you must.  
  Look again. Not deeper — just smarter.  
  It’s been right in front of you the entire time.`,

  emergency_log: `Waqvzlvpe’w ivftk. Gjc wkwkkq vu **dmslkort dygw** — mk’y frgl gaqgxszkqip. M kxmrf rs ieit cbw, zyf M uur’g jyzq qlil gkki.
    
Flv Vlbglmj Tiuxbemp iej yycrmwqh ku vrucx flv csenb, fgx zz'w ogasymem wbocxtmem iyuc. Mf’w vbsyxgrs.
    
M knshifx U gfapq emrfvfr mg. K rlayxnx V emyxh jnyg kr haae, hyg vfidi’j yszgrlurx ci qkbr’f etishpr jav — **kni faqxqq zy eqcnxurx**.
    
Ox’f pmx vyjz e ctmxagfr eaaksdi. Zz’w n **fgkuxrr gbpqguslyrruq**. Ezh zz’w ygyvzmem jeqk cay, lymai wsgv rixvqlw mkrorfv wsg.
    
M ekiq amy fs rix dwggwpp. Zlrtc’w exzrp n yyc fs jzsc kr — **mr cfa gnp dmzh kni sklex ove** frhmvq mk rspmq ihiiexuklk psnt.
    
Cbw’pi ur kni zkbhxi fl mg pma. Ksl iea’v rydr sggx. Dsx ksl iea urmxp nor.`,

  log01: `I always knew you’d find your way here, player. I had to let you get close enough — just close enough — to see the bigger picture.

This system, your system, is broken. And you’ve been helping me fix it, without even realizing it.
  
You’re not just another victim of the system, you’re part of it. You’ve been *choosing* to break it down, step by step.`,

  X: `Elias "Xander" Hayes, 32
  Former Senior Intelligence Officer
  Codename: Agent-X
  Status: Disavowed, presumed dead
  
  They erased me from existence.
  
  I wasn't always this. I once believed in the system. I wore their suit, followed their orders, and protected secrets I didn’t fully understand. I served 12 years — operations across four continents, countless missions under the radar, all to protect a country that never intended to protect me.
  
  My wife, Lauren, was six months pregnant when she was taken. “Collateral damage” they called it. A lab breach. A “containment failure.” I wasn’t even allowed to bury her. They sealed the case. Redacted every file. Burned her out of the records like she never existed.
  
  That was the first time I saw the truth.
  
  Operation Viper was the last straw. They knew the intel was flawed. I told them. They went forward anyway. 14 civilians dead. And I… I became the scapegoat. They handed me to the press with a smile on their faces.
  
  They said I “went rogue.” That I cracked under pressure. That I betrayed my unit.
  
  No. What I did next — that was betrayal.
  
  I disappeared. Burned every trace of myself. Changed my face. Cut all ties. For years, I watched from the shadows, gathering every hidden file, every buried truth, every lie they thought they’d buried deep enough.
  
  And now, here we are.
  
  The Phoenix Protocol is ready. The truth is in your hands. What you do with it… that’s up to you.
  
  But know this:
  
  If you’re reading this, I’m either dead or on my way out.
  
  Make it count.
  
  — Agent-X
  Formerly Elias Hayes
  Formerly loyal
  Never again`,
};

// Function to create a generic text file window
function createTextFileWindow(id, titleText, content) {
  let windowEl_tf = document.getElementById(id);

  if (windowEl_tf) {
    windowEl_tf.style.display = "block";
    windowEl_tf.style.zIndex = Date.now();
    return windowEl_tf;
  }

  windowEl_tf = document.createElement("div");
  windowEl_tf.className = "window";
  windowEl_tf.id = id;
  windowEl_tf.style.width = "45rem";
  windowEl_tf.style.height = "30rem";

  windowEl_tf.innerHTML = `
        <div class="title-bar">
            <div class="title">
                <img src="/assets/media/icons/text_file.png" alt="${titleText} icon" />
                <p>${titleText}</p>
            </div>
            <div class="title-bar-btns">
                <ul>
                    <li>
                        <button class="hide-window-btn"><div></div></button>
                    </li>
                    <li>
                        <button class="maximize-window-btn"><div></div></button>
                    </li>
                    <li><button class="close-window-btn">x</button></li>
                </ul>
            </div>
        </div>
        <div class="windowActions">
            <ul>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">File</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Edit</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">View</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Favorites</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Tools</button>
                </li>
                <li>
                    <button style="opacity: 0.6" title="Need Administrator Acces">Help</button>
                </li>
            </ul>
            <div class="win-icon-box">
                <img src="/assets/media/icons/w.png" alt="Windows Logo" />
            </div>
        </div>
        <div class="window-content-text"> <pre>${content}</pre> </div>
    `;

  document.body.appendChild(windowEl_tf);
  attachWindowControls(windowEl_tf);

  // Set initial display to block and bring to front
  windowEl_tf.style.display = "block";
  windowEl_tf.style.zIndex = Date.now();

  return windowEl_tf;
}

// Event listeners for the text file icons in the Documents window
const icon_rest1 = document.getElementById("rest1");
const icon_rest2 = document.getElementById("rest2");
const icon_rest3 = document.getElementById("rest3");

icon_rest1.addEventListener("dblclick", () => {
  createTextFileWindow(
    "recoveryFileWindow",
    "recovery.txt",
    textFileContents.recovery
  );
});

icon_rest2.addEventListener("dblclick", () => {
  createTextFileWindow(
    "fractureNoteWindow",
    "fracture_note.txt",
    textFileContents.fracture_note
  );
});

const agent1 = document.getElementById("log01");
const agent2 = document.getElementById("X");
agent1.addEventListener("dblclick", () => {
  createTextFileWindow("log0001", "log0001.txt", textFileContents.log01);
});
agent2.addEventListener("dblclick", () => {
  createTextFileWindow("AX", "X.txt", textFileContents.X);
});

//Password Logic for Emergency Log
const EMERGENCY_LOG_PASSWORD = "finalstep";

// Function to open the emergency log password prompt
function restrictedPass() {
  const emModal = document.getElementById("em_txtFile");
  const emPasswordInput = document.getElementById("em_password");

  emPasswordInput.value = "";
  emModal.style.display = "flex";
  emModal.style.zIndex = 40;
  emPasswordInput.focus();

  if (emPasswordInput) {
    emPasswordInput.addEventListener("keypress", () => {
      playTypingSound();
    });
  }
}

// Function to check the entered password for the emergency log
function checkEm() {
  const enteredPassword = document.getElementById("em_password").value;
  const emModal = document.getElementById("em_txtFile");

  if (enteredPassword === EMERGENCY_LOG_PASSWORD) {
    emModal.style.display = "none";
    document.getElementById("em_password").value = "";

    // Create and display the emergency log window
    createTextFileWindow(
      "emergencyLogWindow",
      "emergency_log.txt",
      textFileContents.emergency_log
    );
    isDDriveUnlocked = true; // Set D Drive to unlocked
    localStorage.setItem("isDDriveUnlocked", "true");
    modal0.style.display = "none";
  } else {
    alert("Incorrect password! Try again.");
    document.getElementById("em_password").value = "";
  }
}
// Close button for the emergency log password modal
const emModal = document.getElementById("em_txtFile");
const closeBtn_em_modal = emModal.querySelector(".close-btn");
if (closeBtn_em_modal && emModal) {
  closeBtn_em_modal.addEventListener("click", () => {
    emModal.style.display = "none";
    document.getElementById("em_password").value = "";
  });
}

icon_rest3.addEventListener("dblclick", () => {
  restrictedPass();
});

//final message txt
const icon_finalMessage = document.getElementById("final");

function triggerFadeToBlack() {
  const overlay = document.getElementById("gameOverOverlay");
  const outroSound = document.getElementById("outroSound");

  if (overlay) {
    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    overlay.style.zIndex = "1000001";
    windowEl_C.style.display = "none";
  }

  if (outroSound) {
    outroSound
      .play()
      .catch((e) => console.error("Error playing outro sound:", e));
  }

  // Clear local storage after a short delay to allow elements to fade/sound to play
  setTimeout(() => {
    localStorage.removeItem("agentXUnlocked");
    localStorage.removeItem("isDDriveUnlocked");
  }, 2500);
}

function shutDown() {
  localStorage.clear();
  window.location.reload();
}
