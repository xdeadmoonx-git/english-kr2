// Все определения из материалов, разбитые по темам как в PDF
const DEFINITIONS = [
  {
    topic: "History of Computers",
    items: [
      { term: "Abacus", def: "an ancient counting tool invented in China around 1300 BC used to perform basic arithmetical operations such as addition, subtraction, multiplication, and division.", keywords: ["ancient", "China", "1300 BC", "counting", "arithmetical"] },
      { term: "The Analytical Engine", def: "a mechanical computer designed in the 1830s by Charles Babbage. It is considered the first machine resembling modern computers because it contained an Arithmetic Logic Unit (ALU), control unit, memory, and an input/output system.", keywords: ["1830s", "Charles Babbage", "mechanical", "first", "ALU", "memory"] },
      { term: "Arithmetic Logic Unit (ALU)", def: "a fundamental component of a computer's processor responsible for performing mathematical calculations and logical operations.", keywords: ["processor", "mathematical", "logical operations"] },
      { term: "Integrated Circuit (IC)", def: "often referred to as a microchip, is a miniature electronic circuit consisting of various interconnected components fabricated onto a single semiconductor substance.", keywords: ["microchip", "miniature", "semiconductor", "interconnected"] },
      { term: "Moore's Law", def: "a theory based on a prediction made by Gordon Moore in 1965 stating that computer processing power doubles approximately every two years as manufacturing improves and more transistors are placed on a circuit.", keywords: ["Gordon Moore", "1965", "doubles", "two years", "transistors"] },
      { term: "The Pascaline", def: "the first mechanical adding machine, built by Blaise Pascal between 1642 and 1644, capable of performing addition and subtraction. The device was basically a wooden box with a number of gears and wheels.", keywords: ["Blaise Pascal", "1642", "1644", "addition", "subtraction", "wooden box"] },
      { term: "Parallel processing", def: "a computing method where multiple processors or cores perform several calculations or execute processes simultaneously.", keywords: ["multiple", "simultaneously", "cores"] },
      { term: "Semiconductor", def: "a material, such as silicon, whose ability to conduct electricity increases as its temperature rises.", keywords: ["silicon", "conduct", "electricity", "temperature"] },
      { term: "Transistor", def: "a semiconductor that controls voltage or current flow in electronic signals acting as a switch. This small electronic component replaced vacuum tubes in second-generation computers, leading to higher speeds and smaller computer sizes.", keywords: ["semiconductor", "switch", "vacuum tubes", "second-generation"] },
      { term: "Vacuum tube", def: "an electronic device that regulates electron movement in a vacuum. It was an early electronic component used in first-generation computers (1940s) to control the flow of electricity.", keywords: ["electron", "vacuum", "first-generation", "1940s"] },
      { term: "First-generation computers", def: "electronic digital computers (1940s) characterized by the use of vacuum tubes, enormous physical size, high electricity consumption, and the ability to solve only one problem at a time.", keywords: ["1940s", "vacuum tubes", "enormous", "one problem"] },
      { term: "Second-generation computers", def: "computers (late 1950s–early 1960s) which utilized transistors instead of vacuum tubes. Consequently, these machines were ten times faster, smaller in size, and required less maintenance.", keywords: ["1950s", "1960s", "transistors", "ten times faster"] },
      { term: "Third-generation computers", def: "computers (1965–1972) built with integrated circuits, enabling speeds of a million calculations per second and significantly lower production and maintenance costs.", keywords: ["1965", "1972", "integrated circuits", "million"] },
      { term: "Fourth-generation computers", def: "computers (mid-1970s–present) based on thousands of circuits placed on a single microprocessor chip, supporting Graphical User Interfaces (GUI) and network connectivity.", keywords: ["1970s", "microprocessor", "GUI", "network"] },
      { term: "Fifth-generation computers", def: "modern computers based on parallel processing and Artificial Intelligence, designed to simulate human reasoning and respond to natural language input.", keywords: ["parallel processing", "AI", "human reasoning", "natural language"] }
    ]
  },
  {
    topic: "Types of Computers",
    items: [
      { term: "Desktop PC", def: "a personal computer designed for use in a single, stationary location, typically consisting of a system unit, monitor, keyboard, and mouse.", keywords: ["personal", "stationary", "system unit", "monitor"] },
      { term: "Laptop", def: "a portable, lightweight computer with a hinged design, featuring a flat LCD screen, a built-in keyboard with a touchpad, and a battery for mobile use.", keywords: ["portable", "hinged", "LCD", "touchpad", "battery"] },
      { term: "Mainframe", def: "a large, powerful computer capable of supporting multiple users and thousands of simultaneous queries; it is often used for large-scale data processing in banks and big corporations.", keywords: ["large", "multiple users", "thousands", "banks", "corporations"] },
      { term: "Netbook", def: "a mobile computer that is typically smaller than a laptop. They were popular for basic web browsing and often had fewer functions than a full-sized laptop.", keywords: ["smaller", "laptop", "browsing", "fewer functions"] },
      { term: "Server", def: "a central computer connected to a network of \"client\" workstations, designed to store data and provide services with higher processing power and memory than a standard workstation.", keywords: ["central", "client", "store data", "services"] },
      { term: "Supercomputer", def: "the fastest type of computer, containing tens of thousands of processors for simultaneous execution of data-intensive tasks such as weather forecasting and aerodynamics.", keywords: ["fastest", "tens of thousands", "processors", "weather", "aerodynamics"] },
      { term: "Tablet PC", def: "a highly portable mobile device with a touch screen interface, typically lacking a physical keyboard and using a mobile operating system.", keywords: ["portable", "touch screen", "no physical keyboard", "mobile OS"] },
      { term: "Touchpad", def: "a sensitive pad built into a laptop keyboard that allows the user to move the pointer on the screen by touch, serving as a replacement for a mouse.", keywords: ["sensitive pad", "laptop", "pointer", "replacement for a mouse"] }
    ]
  },
  {
    topic: "Computer Hardware",
    items: [
      { term: "Arithmetic Logic Unit (ALU)", def: "the specific part of the CPU that performs actual arithmetic (e.g., addition, subtraction) and logical operations (e.g., AND, OR, NOT).", keywords: ["CPU", "arithmetic", "logical", "AND, OR, NOT"] },
      { term: "BIOS (Basic Input/Output System)", def: "a ROM chip on the motherboard containing firmware used to perform hardware initialization during the booting process.", keywords: ["ROM chip", "motherboard", "firmware", "booting"] },
      { term: "Bus", def: "an electrical channel that carries signals and allows devices inside the computer to communicate with each other.", keywords: ["electrical channel", "signals", "communicate"] },
      { term: "Central Processing Unit (CPU)", def: "the \"brain\" of the computer, built into a single chip (microprocessor), responsible for executing program instructions and coordinating all other units.", keywords: ["brain", "microprocessor", "executing instructions", "coordinating"] },
      { term: "Clock speed", def: "the measurement of how many cycles a CPU executes per second, typically measured in gigahertz (GHz).", keywords: ["cycles", "CPU", "per second", "GHz"] },
      { term: "Control Unit", def: "the component of the CPU that interprets instructions from the user's program and directs the rest of the hardware to execute them.", keywords: ["CPU", "interprets instructions", "directs hardware"] },
      { term: "Expansion slot", def: "a socket on the motherboard that allows users to install expansion cards to add features like sound or network capabilities.", keywords: ["socket", "motherboard", "expansion cards", "sound", "network"] },
      { term: "Hardware", def: "any physical, electronic, or mechanical part of a computer system that can be seen or touched.", keywords: ["physical", "electronic", "mechanical", "seen", "touched"] },
      { term: "Input device", def: "a hardware unit that enables the user to enter data into the computer's memory, such as a keyboard, mouse, or scanner.", keywords: ["enter data", "keyboard", "mouse", "scanner"] },
      { term: "Motherboard", def: "the main circuit board of a computer that holds the CPU, memory chips, expansion slots, and controllers for peripherals.", keywords: ["main circuit board", "CPU", "memory chips", "expansion slots", "peripherals"] },
      { term: "Mouse", def: "small input device used to specify the position of the cursor or to make choices from menus.", keywords: ["input device", "cursor", "menus"] },
      { term: "Output device", def: "any peripheral that allows the user to extract or view the finished results from the system, such as a monitor or printer.", keywords: ["peripheral", "extract", "view results", "monitor", "printer"] },
      { term: "Peripherals", def: "physical units attached to the computer, including input, output, and storage devices.", keywords: ["physical units", "attached", "input", "output", "storage"] },
      { term: "Program counter (PC)", def: "a CPU register that keeps track of the next instruction to be performed.", keywords: ["CPU register", "next instruction"] },
      { term: "Instruction register (IR)", def: "a CPU register that holds the instruction that is being executed now.", keywords: ["CPU register", "currently executed instruction"] },
      { term: "RAM (Random Access Memory)", def: "volatile main memory used to temporarily store data and instructions while they are being processed by the CPU; its contents are lost when power is turned off.", keywords: ["volatile", "temporarily", "CPU", "lost when power off"] },
      { term: "Registers", def: "high-speed memory units within the CPU used to store and control data immediately needed for instruction execution.", keywords: ["high-speed", "CPU", "instruction execution"] },
      { term: "ROM (Read Only Memory)", def: "non-volatile memory containing permanent instructions and routines for basic CPU operations, such as the BIOS.", keywords: ["non-volatile", "permanent", "BIOS"] },
      { term: "Scanner", def: "an input device that converts images, printed text or handwriting into a digital image.", keywords: ["input device", "images", "printed text", "digital image"] },
      { term: "Speaker", def: "a device that provides sound output.", keywords: ["sound output"] },
      { term: "Storage device", def: "a peripheral device used for permanent or long-term storage of data and programs, such as hard drives or flash drives.", keywords: ["peripheral", "permanent", "long-term", "hard drives", "flash drives"] },
      { term: "SMT (simultaneous multi-threading technology)", def: "a technology that allows two threads to run on a single core, which enables more effective use of CPU resources and improves overall performance.", keywords: ["two threads", "single core", "CPU resources", "performance"] }
    ]
  },
  {
    topic: "Primary Memory",
    items: [
      { term: "Cache hit", def: "a situation when the processor finds data in the cache area.", keywords: ["processor", "finds", "cache"] },
      { term: "Cache memory", def: "a type of very fast volatile memory that holds a small amount of recently accessed data and acts as a buffer between the main memory and the processor.", keywords: ["fast", "volatile", "recently accessed", "buffer"] },
      { term: "Cache miss", def: "a situation when the processor does not find data in the cache area and reads it in the slower RAM.", keywords: ["processor", "does not find", "slower RAM"] },
      { term: "RAM", def: "a type of volatile memory inside a computer that stores data temporarily and gets erased when the computer is turned off.", keywords: ["volatile", "temporarily", "erased", "turned off"] },
      { term: "ROM", def: "a type of non-volatile memory including BIOS, firmware, bootloaders that store critical instructions to initiate the system.", keywords: ["non-volatile", "BIOS", "firmware", "bootloaders", "initiate"] },
      { term: "Primary memory", def: "an internal storage device, such as cache or RAM, which can be directly accessed by the CPU with minimum or no delay.", keywords: ["internal", "cache", "RAM", "CPU", "no delay"] },
      { term: "Write-back cache", def: "a method changing data in the cache area first, while RAM is updated later.", keywords: ["cache first", "RAM later"] },
      { term: "Write-through cache", def: "a method of refreshing data in the cache and main memory simultaneously.", keywords: ["cache and main memory", "simultaneously"] }
    ]
  },
  {
    topic: "Secondary Storage",
    items: [
      { term: "Access time", def: "the amount of time it takes for a storage device to search and locate the data you plan to open, copy, move.", keywords: ["storage device", "search", "locate"] },
      { term: "Capacity", def: "the maximum amount of data a storage device can contain.", keywords: ["maximum", "data", "storage device"] },
      { term: "CD-R", def: "a type of CD which is released blank and can be recorded on once only.", keywords: ["blank", "recorded once"] },
      { term: "CD-ROM", def: "a type of CD which comes pre-recorded and doesn't allow to change data stored on it.", keywords: ["pre-recorded", "no change"] },
      { term: "CD-RW", def: "a type of CD whose data can be written, read, erased, and rewritten.", keywords: ["written", "read", "erased", "rewritten"] },
      { term: "Flash memory", def: "a type of non-volatile memory which works by using electronic circuits to store and retrieve data.", keywords: ["non-volatile", "electronic circuits"] },
      { term: "Floppy disk", def: "an outdated storage device of low capacity made of flexible plastic material upon which data is stored on magnetic tracks.", keywords: ["outdated", "low capacity", "flexible plastic", "magnetic tracks"] },
      { term: "Magnetic storage", def: "a type of storage in which data is written by magnetizing particles on a disk or tape.", keywords: ["magnetizing", "particles", "disk or tape"] },
      { term: "NOR flash", def: "a type of flash memory that provides fast access to small amounts of data used in bootloaders and firmware.", keywords: ["fast access", "small amounts", "bootloaders", "firmware"] },
      { term: "NAND flash", def: "a type of flash memory that provides slow access to large amounts of data used in SSDs and USB flash drives.", keywords: ["slow access", "large amounts", "SSDs", "USB"] },
      { term: "Optical storage", def: "a type of storage is which data is written as a series of reflective marks and read with a laser.", keywords: ["reflective marks", "laser"] },
      { term: "Read/write head", def: "a part of an HDD which reads and writes data by magnetizing and demagnetizing fields on spinning platters.", keywords: ["HDD", "magnetizing", "spinning platters"] },
      { term: "Transfer rate", def: "the average speed at which data can be transmitted from one device to another, often measured in megabytes per second.", keywords: ["average speed", "transmitted", "megabytes per second"] }
    ]
  },
  {
    topic: "Software",
    items: [
      { term: "CLI", def: "the way to interact with a computer system through typing various commands in the form of lines of text.", keywords: ["typing", "commands", "lines of text"] },
      { term: "Compatible", def: "being able to work with another device or program.", keywords: ["work with", "device", "program"] },
      { term: "Device driver", def: "a type of software that controls specific hardware of the computer system.", keywords: ["software", "controls hardware"] },
      { term: "Firmware", def: "permanent software or set of instructions stored in ROM of the computer system.", keywords: ["permanent", "ROM", "instructions"] },
      { term: "GUI", def: "a user-friendly interface based on graphics; it uses a WIMP environment.", keywords: ["graphics", "WIMP", "user-friendly"] },
      { term: "Operating system", def: "a set of programs that manage the computer's hardware resources, establish a user interface, and provide the environment for application programs to run.", keywords: ["manage hardware", "user interface", "environment", "applications"] },
      { term: "Open-source software", def: "a type of computer software whose copyright holder grants users the rights to use, study, change, and distribute the software to anyone and for any purpose.", keywords: ["copyright holder", "use", "study", "change", "distribute"] },
      { term: "Proprietary software", def: "non-free software whose users are not allowed to share, modify it, and distribute the modifications.", keywords: ["non-free", "not allowed", "share", "modify"] },
      { term: "Spreadsheet", def: "a computer application for organization, analysis and storage of data in a tabular form.", keywords: ["organization", "analysis", "storage", "tabular"] },
      { term: "Word processor", def: "a computer application used to compose and edit texts.", keywords: ["compose", "edit", "texts"] },
      { term: "Preemptive multitasking", def: "a type of multitasking where the operating system can initiate a context switch to satisfy the scheduling policy's priority, thus preempting the active task.", keywords: ["OS initiates", "context switch", "priority", "preempting"] },
      { term: "Cooperative multitasking", def: "a computer multitasking technique in which the operating system never initiates a context switch from a running process to another process.", keywords: ["OS never initiates", "context switch", "running process"] }
    ]
  },
  {
    topic: "Networks",
    items: [
      { term: "Topology", def: "the configuration of the elements (nodes) of a network.", keywords: ["configuration", "nodes", "network"] },
      { term: "Local area network (LAN)", def: "a collection of devices connected together in one physical location, such as a building, office, or home.", keywords: ["one physical location", "building", "office", "home"] },
      { term: "Metropolitan Area Network (MAN)", def: "a high-speed network that interconnects multiple LANs within a specific geographic area, such as a city, large campus, or municipality.", keywords: ["high-speed", "multiple LANs", "city", "campus"] },
      { term: "Wide Area Network (WAN)", def: "a type of computer network that connects computers and other devices over a large geographical area (a country or a continent).", keywords: ["large geographical area", "country", "continent"] },
      { term: "Network hub", def: "a node that broadcasts data to every computer or Ethernet-based device connected to it without restriction.", keywords: ["broadcasts", "every device", "without restriction"] },
      { term: "Network switch", def: "identical to a network hub, but unlike a hub, a switch forwards data to the specific device only based on its MAC address.", keywords: ["specific device", "MAC address"] },
      { term: "Bus topology", def: "a network setup where all nodes (computers, servers, printers) connect directly to a single, central cable, known as the backbone or bus.", keywords: ["single", "central cable", "backbone"] },
      { term: "Peer-to-peer network", def: "a network architecture in which all the computers have the same capabilities, i.e. share files and peripherals, without requiring a separate server computer.", keywords: ["same capabilities", "no separate server"] },
      { term: "Client-server network", def: "a computing model in which multiple clients connect to a central server to access resources, such as files, applications, and data.", keywords: ["multiple clients", "central server", "resources"] },
      { term: "Ring topology", def: "a LAN topology, in which all devices are interconnected in a continuous loop.", keywords: ["LAN", "continuous loop"] },
      { term: "Tree topology", def: "a type of network setup that combines elements from both star and bus topologies to create a hierarchical structure.", keywords: ["star", "bus", "hierarchical"] },
      { term: "Mesh topology", def: "a network configuration where every device is interconnected with every other device, providing multiple routes for data to travel.", keywords: ["every device interconnected", "multiple routes"] },
      { term: "Hybrid topology", def: "a network structure that combines two or more different types of topologies into a single system.", keywords: ["combines", "two or more topologies"] },
      { term: "Star topology", def: "a LAN topology, in which all data flows through a central hub, a common connection point for the devices on the network.", keywords: ["LAN", "central hub", "common connection point"] },
      { term: "Ad hoc topology", def: "a wireless peer-to-peer network that does not rely on the existing infrastructure.", keywords: ["wireless", "peer-to-peer", "no infrastructure"] },
      { term: "Bridge", def: "a hardware component connecting networks that use the same protocol.", keywords: ["hardware", "same protocol"] },
      { term: "Router", def: "a networking device that can send data packets from one network to another.", keywords: ["data packets", "one network to another"] },
      { term: "Gateway", def: "a device or software used to enable communication between two networks that may be using different protocols.", keywords: ["communication", "two networks", "different protocols"] },
      { term: "Computer network", def: "a group of computers that use a set of common communication protocols over digital interconnections for the purpose of sharing resources located on or provided by the network nodes.", keywords: ["common protocols", "digital interconnections", "sharing resources"] },
      { term: "Latency", def: "the time delay between a user's action (request) and the system's response, typically measured in milliseconds (ms).", keywords: ["time delay", "request", "response", "ms"] },
      { term: "Modem", def: "(modulator-demodulator), is a computer hardware device that converts data from a digital format into a format suitable for an analog transmission medium such as telephone or radio.", keywords: ["modulator-demodulator", "digital", "analog", "telephone"] },
      { term: "Wired networks", def: "communication systems that connect devices using physical cables, such as Ethernet (twisted pair), fiber optics, or coaxial cables, to a central router or switch.", keywords: ["physical cables", "Ethernet", "fiber optics", "coaxial"] },
      { term: "Wireless network", def: "a computer network that uses wireless data connections between network nodes.", keywords: ["wireless connections", "network nodes"] },
      { term: "Wireless LAN (WLAN)", def: "a wireless computer network that forms a local area network by linking devices over Wi-Fi radio signals.", keywords: ["wireless LAN", "Wi-Fi", "radio signals"] },
      { term: "Backbone network", def: "a high-capacity communications network that serves as the principal data path interconnecting multiple subnetworks.", keywords: ["high-capacity", "principal data path", "subnetworks"] },
      { term: "OSI model", def: "(Open Systems Interconnection) is a set of rules that explains how different computer systems communicate over a network.", keywords: ["rules", "different systems", "communicate"] },
      { term: "Application layer", def: "the layer that serves as the interface between the end-user applications and the underlying network services.", keywords: ["interface", "end-user applications", "network services"] },
      { term: "Presentation layer", def: "the layer that acts as a translator and negotiator, ensuring that data from the application layer (Layer 7) can be understood by the receiving system.", keywords: ["translator", "negotiator", "Layer 7"] },
      { term: "Session layer", def: "the layer that manages the establishment, maintenance, and termination of connections (sessions) between applications on different devices.", keywords: ["establishment", "maintenance", "termination", "sessions"] },
      { term: "Transport layer", def: "the layer that ensures reliable, ordered, and error-checked delivery of data between applications on different network hosts.", keywords: ["reliable", "ordered", "error-checked", "hosts"] },
      { term: "Network layer", def: "the layer that handles routing, forwarding, and logical addressing (IP addresses) to send data packets between different networks or devices.", keywords: ["routing", "forwarding", "IP addresses"] },
      { term: "Data link layer", def: "the OSI model layer responsible for node-to-node data transfer on a local network segment, ensuring reliable, error-free transmission between directly connected devices.", keywords: ["node-to-node", "local segment", "error-free"] },
      { term: "Physical layer", def: "the lowest layer of the OSI model and it is responsible for transmitting raw bits of data from one node to the other over physical cable or wireless connection.", keywords: ["lowest layer", "raw bits", "physical cable"] },
      { term: "Media Access Control (MAC) address", def: "a 12-digit hexadecimal number that uniquely identifies every device connected to a network.", keywords: ["12-digit", "hexadecimal", "uniquely identifies"] },
      { term: "Internet Protocol (IP) address", def: "the unique identifying number assigned to every device connected to the internet.", keywords: ["unique", "every device", "internet"] },
      { term: "Bluetooth", def: "a wireless technology that allows mobile devices and other peripheral devices to communicate over short distances.", keywords: ["wireless", "short distances"] }
    ]
  },
  {
    topic: "The Internet",
    items: [
      { term: "Coaxial cable", def: "a type of cable that consists of four main components: inner conductor, insulation, metal shield, and jacket.", keywords: ["four components", "inner conductor", "insulation", "metal shield", "jacket"] },
      { term: "Virtual circuit switching", def: "an approach in which a path is built between the source and the destination points through which all packets are routed.", keywords: ["path", "source", "destination", "all packets"] },
      { term: "Datagram switching", def: "a packet switching method that treats each packet, or datagram, as a separate entity. Each packet is routed via the network on its own though different paths, and then the packets are reassembled at the destination point.", keywords: ["each packet separate", "different paths", "reassembled"] },
      { term: "Digital Subscriber Line", def: "a broadband communication technology designed for the use on telephone lines; it allows a single phone connection to be used for both Internet service and voice calls at the same time.", keywords: ["broadband", "telephone lines", "Internet and voice"] },
      { term: "Fiber-optic technology", def: "the fastest wired way to access the Internet transmitting information as pulses of light through strands of fiber made of glass or plastic over long distances.", keywords: ["fastest wired", "pulses of light", "glass or plastic"] },
      { term: "Bandwidth", def: "the measure of how much information can pass through a data connection in a given amount of time, measured in bits per second.", keywords: ["information", "data connection", "bits per second"] },
      { term: "Cellular network", def: "a radio-based communication network distributed over land areas called cells, each served by a fixed-location transceiver, known as a cell tower.", keywords: ["radio-based", "cells", "cell tower"] },
      { term: "Dial-up connection", def: "the least expensive but also the slowest way to access the Internet which uses a standard phone line and analog modem. This technology pre-existed the DSL connection and used one and the same frequency to transmit voice and data signal.", keywords: ["least expensive", "slowest", "analog modem", "phone line"] },
      { term: "TCP/IP stack", def: "a four-layer protocol model used on the Internet to govern how data is transmitted between computers. It is named after the two main protocols TCP and IP and is widely used as a framework to model communication in a network.", keywords: ["four-layer", "TCP", "IP", "framework"] },
      { term: "World Wide Web (WWW)", def: "an information system accessible through the Internet where documents and other web resources are identified by a Uniform Resource Locator (URL).", keywords: ["information system", "URL", "web resources"] }
    ]
  },
  {
    topic: "Search Engines",
    items: [
      { term: "Ranking", def: "the process of ordering the search results from most relevant to least relevant.", keywords: ["ordering", "most relevant", "least relevant"] },
      { term: "Web crawler", def: "a special program also known as a spider that regularly browses the web to discover new content. It works by following hyperlinks from page to page and storing copies of the pages in a search engine's index.", keywords: ["spider", "browses", "hyperlinks", "search engine's index"] },
      { term: "Human-powered directories", def: "systems that depend on human editors for their listings. A directory gets its information from submissions, which include a short description to the directory for the entire site, or from editors who write one for sites they review. When a user query is entered, the system looks for matches only in the descriptions submitted.", keywords: ["human editors", "submissions", "descriptions"] },
      { term: "Meta-search engine", def: "a type of search engine which does not have a database of indexed pages of its own. Instead, it sends users' queries to several other search engines and compiles top results from each into one overall list.", keywords: ["no own database", "sends queries", "compiles results"] },
      { term: "Search bar", def: "a field on the screen that allows users to enter keywords or phrases to find specific content.", keywords: ["field", "keywords", "phrases"] },
      { term: "Web browser", def: "software that serves as a gateway to the World Wide Web. It identifies individual URLs and displays the corresponding page on the user's device.", keywords: ["gateway", "WWW", "URLs", "displays"] },
      { term: "Search engine", def: "software system that scans, indexes, and retrieves web content to help users find information online.", keywords: ["scans", "indexes", "retrieves"] },
      { term: "Hyperlink (search engines)", def: "a highlighted word or image in a hypertext document that takes a user to another location when he/she clicks on it.", keywords: ["highlighted", "hypertext", "another location"] }
    ]
  },
  {
    topic: "Web Design",
    items: [
      { term: "Backend development", def: "a field of web development that is associated with the part of the site connected to the server.", keywords: ["server", "part of site"] },
      { term: "Frontend development", def: "a field of web development that focuses on the visible part of the site.", keywords: ["visible part"] },
      { term: "HTML", def: "a code used to describe the structure of information on a webpage telling the web browser how to display its content.", keywords: ["structure", "webpage", "display"] },
      { term: "Hyperlink (web design)", def: "a text, image or button that takes you to other web pages when you click on it.", keywords: ["text", "image", "button", "other pages"] },
      { term: "JavaScript", def: "a programming language used by web developers to create dynamically updating content, use animations, pop-up menus, clickable buttons, etc.", keywords: ["programming language", "dynamically updating", "animations"] },
      { term: "CSS", def: "a mechanism for adding style (e.g. fonts, colors, spacing) to web documents.", keywords: ["style", "fonts", "colors", "spacing"] },
      { term: "SEO", def: "a set of improvements that increases visibility of a site and helps it rank higher on the results page.", keywords: ["improvements", "visibility", "rank higher"] },
      { term: "Website builder", def: "a platform that can be used to create a website without having to code.", keywords: ["platform", "without coding"] }
    ]
  },
  {
    topic: "Programming Languages",
    items: [
      { term: "Assembly language", def: "a low-level programming language that uses symbolic instructions rather than raw binary coding to communicate directly with a computer's hardware.", keywords: ["low-level", "symbolic", "hardware"] },
      { term: "Object-oriented programming (OOP)", def: "a programming paradigm in computer science that relies on the concept of classes and objects. Objects are defined as software entities that encapsulate data and functions.", keywords: ["classes", "objects", "encapsulate"] },
      { term: "Compiler", def: "a special program that converts a source program (written in a high-level language) into object code in one go.", keywords: ["high-level", "object code", "one go"] },
      { term: "Interpreter", def: "a special program that translates the source code line by line, as the program is running.", keywords: ["line by line", "running"] },
      { term: "Inheritance", def: "the ability of one class to use properties and behavior of another class.", keywords: ["class", "properties", "behavior", "another class"] },
      { term: "Polymorphism", def: "a programming language's ability to process objects differently depending on their data type or class.", keywords: ["objects differently", "data type", "class"] },
      { term: "Encapsulation", def: "a fundamental concept that combines data (attributes) and methods (functions) into a single unit.", keywords: ["combines", "data", "methods", "single unit"] },
      { term: "Source code", def: "a set of instructions typically written in a high-level programming language that defines how a program or application should function.", keywords: ["instructions", "high-level", "function"] },
      { term: "Machine code", def: "a code made of just two numbers (0 and 1).", keywords: ["0 and 1", "two numbers"] },
      { term: "Debugging", def: "the technique of detecting and correcting errors which may occur in programs.", keywords: ["detecting", "correcting errors"] }
    ]
  },
  {
    topic: "Malware and Cybercrime",
    items: [
      { term: "Spyware", def: "malicious software designed to enter a computer device, gather data about a person or organization and forward it to a third party without a user's consent.", keywords: ["gather data", "third party", "without consent"] },
      { term: "Adware", def: "a form of financially supported malware that usually presents itself as unwanted commercials.", keywords: ["financially supported", "unwanted commercials"] },
      { term: "Keylogger", def: "a type of spyware used to monitor and record each keystroke on a specific keyboard. The information is gathered and sent to the attacker. This malware is most often used for stealing passwords.", keywords: ["spyware", "keystroke", "attacker", "stealing passwords"] },
      { term: "Worm", def: "a standalone malicious computer program that replicates itself to infect other computers. It is able to spread across the network directly without attaching itself to a host file.", keywords: ["standalone", "replicates", "without host file"] },
      { term: "Hijacking", def: "a type of cybercrime which involves redirecting anyone trying to visit a certain site elsewhere.", keywords: ["redirecting", "elsewhere"] },
      { term: "DDoS attack", def: "an attack where hackers overload networks and servers with traffic so that computer systems are unable to keep up with legitimate needs.", keywords: ["overload", "traffic", "unable to keep up"] },
      { term: "Trojan", def: "a type of malware that misleads users of its true intent by pretending to be a useful program.", keywords: ["misleads", "pretending to be useful"] },
      { term: "Phishing", def: "a type of cybercrime where the attacker sends a fake message designed to trick a person into revealing sensitive information to the attacker.", keywords: ["fake message", "trick", "sensitive information"] },
      { term: "Ransomware", def: "a type of malware that threatens to publish the victim's data, encrypts the victim's data or blocks access to the device unless a payment is made.", keywords: ["threatens to publish", "encrypts", "payment"] },
      { term: "Miner", def: "a virus which uses your computer power to earn cryptocurrency for others.", keywords: ["computer power", "cryptocurrency", "others"] },
      { term: "Piracy", def: "unauthorized copying of a program for sale or distributing to other users.", keywords: ["unauthorized copying", "sale", "distributing"] },
      { term: "Backdoor", def: "a technique that involves leaving, within a completed program, an illicit program that allows unauthorized and unknown entry.", keywords: ["illicit program", "unauthorized entry"] },
      { term: "Defacement", def: "a cybercrime which involves changing the information shown on another person's website.", keywords: ["changing", "another's website"] },
      { term: "Salami shaving", def: "a computer crime in which a program is altered so that it transfers a small amount of money from a large number of accounts to make a large profit.", keywords: ["small amount", "large number of accounts", "large profit"] },
      { term: "Misdirection routine", def: "the component that allows a virus to hide itself.", keywords: ["hide", "virus"] },
      { term: "Trigger", def: "the component of a virus that activates payload.", keywords: ["activates", "payload"] },
      { term: "Payload", def: "the component of a virus that does the damage to the computer system.", keywords: ["damage", "computer system"] },
      { term: "Reproduction routine", def: "the component that allows the virus to self-replicate and infect other programs.", keywords: ["self-replicate", "infect"] }
    ]
  },
  {
    topic: "Data Security",
    items: [
      { term: "Firewall", def: "a combination of software and hardware used to protect private networks by filtering incoming data traffic.", keywords: ["software and hardware", "private networks", "filtering"] },
      { term: "Signature", def: "a distinguishing feature that every computer virus contains.", keywords: ["distinguishing feature", "every virus"] },
      { term: "Heuristic scanning", def: "a type of malware detection technique which allows identifying potentially malicious software without having an exact match in signature database.", keywords: ["malware detection", "without exact match", "signature database"] },
      { term: "Cybersecurity", def: "the practice employed to protect and secure computers, servers, networks, mobile devices, electronic systems, and data from being attacked.", keywords: ["protect", "secure", "from being attacked"] },
      { term: "Multi-factor authentication (MFA)", def: "a user verification technology that requires more than one type of user validation.", keywords: ["verification", "more than one", "validation"] },
      { term: "Encryption", def: "a way of encoding data so that only authorized parties can understand the information.", keywords: ["encoding", "authorized parties"] },
      { term: "Brute force", def: "a cybersecurity threat where a hacker attempts to access a system by systematically testing different passwords.", keywords: ["hacker", "systematically testing", "passwords"] },
      { term: "Password", def: "secret data, typically a string of characters, usually used to confirm a user's identity.", keywords: ["secret", "string of characters", "confirm identity"] },
      { term: "Cryptanalysis", def: "a method of spotting a weakness in the cipher aiming to decrypt encoded data.", keywords: ["weakness", "cipher", "decrypt"] },
      { term: "Secure Sockets Layer (SSL)", def: "an Internet security protocol that encrypts data to ensure secure communication between devices over a network.", keywords: ["security protocol", "encrypts", "secure communication"] },
      { term: "Web application firewall (WAF)", def: "helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet.", keywords: ["web applications", "filtering", "HTTP traffic"] },
      { term: "Ciphertext", def: "encrypted text transformed from plaintext using an encryption algorithm.", keywords: ["encrypted text", "plaintext", "algorithm"] },
      { term: "Cryptography", def: "the process of hiding or coding information so that only the person a message was intended for can read it.", keywords: ["hiding", "coding", "intended"] },
      { term: "Cryptographic key", def: "a randomized string of bits used to encrypt and/or decrypt data.", keywords: ["randomized", "string of bits", "encrypt", "decrypt"] },
      { term: "Symmetric encryption", def: "the process of using a single key to both encrypt and decrypt data.", keywords: ["single key", "encrypt and decrypt"] },
      { term: "Asymmetric encryption", def: "(or public-key cryptography) is a security method that uses a mathematically linked pair of keys—a public key for encryption and a private key for decryption—to protect data.", keywords: ["public-key", "pair of keys", "public key", "private key"] },
      { term: "Antivirus software", def: "is designed to detect, present and take action to disarm or remove malicious software from your computer such as viruses, worms and Trojan horses.", keywords: ["detect", "disarm", "remove", "viruses", "worms"] },
      { term: "Packet filtering firewall", def: "a network security device that filters incoming and outgoing network packets based on a predefined set of rules.", keywords: ["network packets", "predefined rules"] },
      { term: "Backup program", def: "a program that stores a copy of data on a storage device to keep it safe.", keywords: ["copy", "storage device", "safe"] },
      { term: "Incremental backup", def: "a backup type that only copies data that has been changed or created since the previous full, differential or incremental backup.", keywords: ["changed or created", "previous backup"] },
      { term: "Differential backup", def: "a data protection method that copies all files changed since the last full backup.", keywords: ["all files changed", "last full backup"] }
    ]
  },
  {
    topic: "The Future of IT",
    items: [
      { term: "Artificial Intelligence (AI)", def: "a technology that simulates human intelligence in computer systems. It enables a computer or a robot controlled by a computer to do tasks that are usually done by humans.", keywords: ["simulates human", "tasks", "done by humans"] },
      { term: "Internet of Things (IoT)", def: "a system of interrelated computing devices, mechanical, and digital machines provided with the ability to share data in order to automate processes.", keywords: ["interrelated", "share data", "automate"] },
      { term: "Virtual Reality (VR)", def: "a computer-generated space in which the user interacts with artificial objects through 3-D computer simulation.", keywords: ["computer-generated", "artificial objects", "3-D"] },
      { term: "Neural Networks (NN)", def: "computing systems with interconnected nodes that resemble neurons in the human brain. Using algorithms, they can recognize hidden patterns and correlations in raw data, classify it, and continuously learn and improve.", keywords: ["interconnected nodes", "neurons", "patterns", "learn"] },
      { term: "Augmented Reality (AR)", def: "an enhanced version of the real physical world, which integrates digital information with the existing environment in real time.", keywords: ["enhanced", "real world", "digital information", "real time"] },
      { term: "Backpropagation", def: "an algorithm that is designed to test for errors working back from output nodes to input nodes.", keywords: ["test for errors", "output to input"] },
      { term: "Unique Identifier (UID)", def: "a numeric or alphanumeric string assigned to a specific entity—such as a user, device, file, or database record—to distinguish it from others within a system.", keywords: ["numeric or alphanumeric", "distinguish", "specific entity"] },
      { term: "Machine Learning (ML)", def: "a subset of AI that enables software to learn from data, identifying patterns to make predictions or decisions without being explicitly programmed.", keywords: ["subset of AI", "learn from data", "without programmed"] },
      { term: "Artificial neurons", def: "units arranged in a series of layers, each of which connects to the layers on either side.", keywords: ["units", "layers", "either side"] },
      { term: "Input units", def: "the layers of artificial neurons designed to receive various forms of information from the outside world that the network will attempt to learn about, recognize, or otherwise process.", keywords: ["receive", "outside world", "learn"] },
      { term: "Output units", def: "the layers of artificial neurons designed to signal how the network responds to the information it has learned.", keywords: ["signal", "responds", "learned"] },
      { term: "Hidden units", def: "the layers of artificial neurons between the input and output layers that process information and form the core computational engine, or \"artificial brain,\" of a neural network.", keywords: ["between input and output", "core", "artificial brain"] },
      { term: "Weight", def: "a numerical value representing the strength of the connection between two units (neurons) in a neural network, where a positive value indicates excitation and a negative value indicates inhibition.", keywords: ["numerical", "strength", "excitation", "inhibition"] },
      { term: "Human-level artificial intelligence (HLAI)", def: "a term used to describe artificial intelligence systems that have human-like abilities in terms of reasoning, learning, perception, and problem solving.", keywords: ["human-like", "reasoning", "learning", "perception"] },
      { term: "Turing Test", def: "a test of whether a computer can show intelligent behavior like that of a human, done by seeing if a tester can tell whether the answers to a set of questions come from the computer or from a person.", keywords: ["intelligent behavior", "tester", "questions"] }
    ]
  }
];
