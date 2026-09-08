/* =========================================================
   FACULTY DATA
   ========================================================= */

const faculty = [

    {
        name: "Mr. Tamal Pal",

        photo: "tamal_pal.jpg",

        email: " tamal@cs.iiests.ac.in",

        qualification: [
            "Ph.D (Engineering), Computer Science and Technology, IIEST ",
            "ME. Computer Science and Technology, IIEST",
            "BTech. Computer Science and Engineering, MAKAUT"
        ],

        subjects: [
           "Computer Graphics",
           "Introduction to Computing",
           "Programming Paradigm",
           "Web Technology",
           "Software Engineering",
           "Peripheral Devices and Interfaces"
        ],

        research: [
            "Computer Vision: Multimedia (Image, Video, etc.) processing ",
            "Multimedia communication over Wireless Networks (WMSN, DTN, VANET, etc.)",
            "Multimedia security",
            "AIML(Artificial Intelligence & Machine Learning)",
            "Games programming"
        ]
    },


    {
        name: "Mr. Surajeet Ghosh",

        photo: "surajeet.png",

        email: "surajeet@cs.iiests.ac.in",

        qualification: ["Ph.D. (Engineering), Jadavpur University, Kolkata, India",
            "M.E. (Computer Science and Engineering), Maulana Abul Kalam Azad University of Technology, (Formerly West Bengal University of Technology), Kolkata, India",
            "B.Tech. (Computer Science and Technology), University of Kalyani, Kalyani, West Bengal, India"
        ],

        subjects: [
            "Introduction to Computing",
            "Peripheral Devices and Interfaces",
            "Computer Networks",
            "Embedded Systems",
            "Reconfigurable Computing",
            "Network Security"
        ],

        research: [
            "Machine Learning Based Optimization for IoT Protocol",
            "Hardware Accelerators for Machine Learning Applications",
            "IPv6 Routing Protocol for Low-Power and Lossy Networks (RPL)",
            "Machine Learning for Embedded Systems",
            "Routing Protocol for IoT Networks",
            "FPGA Based Embedded Systems Design",
            "Hardware Architecture for Network Routing Schemes",
            "Computational Architecture for Next Generation Sequencing"
        ]
    },


    {
        name: "Mrs. Sipra Das Bit",

        photo: "sipradasbit.jpg",

        email: "sb@cs.iiests.ac.in",

        qualification: [ "Ph.D(Engg) from Dept. of Computer Sc. & Engg.from Jadavpur University, Kolkata, 1997"
        ],
        
        subjects: [  
            "Database Management System",
            "Advanced Database Management System"
        ],
          

        research: [
            " IoT and its usage in Industrial Informatics",
            "Delay Tolerant Network and its usage in Smart City and Post-disaster management system",
            "Wireless Sensor Network",
            "Mobile Computing"
        ]
    }

];


/* =========================================================
   GET HTML ELEMENTS
   ========================================================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const profileContainer =
    document.getElementById("profileContainer");



/* =========================================================
   FUNCTION TO DISPLAY FACULTY
   ========================================================= */

function displayFaculty(person) {

    profileContainer.innerHTML = `

        <div class="profile">

            <!-- PHOTO -->

            <div class="photo-section">

                <img
                    src="${person.photo}"
                    alt="${person.name}"
                >

            </div>


            <!-- DETAILS -->

            <div class="details">

                <h2>${person.name}</h2>


                <!-- NAME -->

                <div class="info-row">

                    <div class="info-label">
                        Name
                    </div>

                    <div class="info-value">
                        ${person.name}
                    </div>

                </div>


                <!-- EMAIL -->

                <div class="info-row">

                    <div class="info-label">
                        Email ID
                    </div>

                    <div class="info-value">

                        <a
                            class="email"
                            href="mailto:${person.email}"
                        >
                            ${person.email}
                        </a>

                    </div>

                </div>


                <!-- QUALIFICATION -->

                <div class="info-row">

                    <div class="info-label">
                        Highest Qualification
                    </div>

                    <div class="info-value">
                        <ul>
                            ${person.qualification
                                .map(area => `<li>${area}</li>`)
                                .join("")}
                        </ul>                  
                    </div>

                </div>


                <!-- SUBJECTS -->

                <div class="info-row">

                    <div class="info-label">
                        Subjects Teaching
                    </div>

                    <div class="info-value">

                        <ul>

                            ${person.subjects
                                .map(subject => `<li>${subject}</li>`)
                                .join("")}

                        </ul>

                    </div>

                </div>


                <!-- RESEARCH -->

                <div class="info-row">

                    <div class="info-label">
                        Research Areas
                    </div>

                    <div class="info-value">

                        <ul>

                            ${person.research
                                .map(area => `<li>${area}</li>`)
                                .join("")}

                        </ul>

                    </div>

                </div>

            </div>

        </div>

    `;
}
function normalizeName(name)
{
    return name
    .toLowerCase()
    .replace(/[\s.]/g,"");
}

/* =========================================================
   SEARCH FUNCTION
   ========================================================= */

function searchFaculty() {

    const searchText = normalizeName(searchInput.value);


    /* Empty search */

    if (searchText === "") {

        profileContainer.innerHTML = `

            <div class="no-result">

                <h2>Search for a Faculty Member</h2>

                <p>
                    Enter a faculty name in the search box
                    to view the profile.
                </p>

            </div>

        `;

        return;
    }


    /* Search faculty */

    const result = faculty.find(person =>
        normalizeName(person.name).includes(searchText)
    );


    /* If faculty found */

    if (result) {

        displayFaculty(result);

    }


    /* If faculty not found */

    else {

        profileContainer.innerHTML = `

            <div class="no-result">

                <h2>Faculty Not Found</h2>

                <p>
                    No faculty member matches
                    "${searchInput.value}".
                </p>

            </div>

        `;
    }
}


/* =========================================================
   SEARCH BUTTON EVENT
   ========================================================= */

searchButton.addEventListener(
    "click",
    searchFaculty
);


/* =========================================================
   ENTER KEY EVENT
   ========================================================= */

searchInput.addEventListener(
    "keyup",
    function(event) {

        if (event.key === "Enter") {

            searchFaculty();

        }
    }
);