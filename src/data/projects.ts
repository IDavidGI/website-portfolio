import pokedexImage from '../images/pokedex/Homepage.png'
import pokedexFavoritesImage from '../images/pokedex/Favoritespage.png'
import drunkDrivingImage from '../images/drunkdriving/HUD.png'
import drunkDrivingUnityImage from '../images/drunkdriving/HUDunity.png'
import drunkDrivingEnvironmentImage from '../images/drunkdriving/Omgevingunity.png'
import drunkDrivingTrafficLightsImage from '../images/drunkdriving/RLtrafficlights.png'
import travelJournalImage from '../images/traveljournal/Homescreen.jpg'
import travelJournalAddTripImage from '../images/traveljournal/Addtrippage.jpg'
import travelJournalAppLogoImage from '../images/traveljournal/Applogo.jpg'
import travelJournalChecklistImage from '../images/traveljournal/ChecklistPage.jpg'
import travelJournalEditItemImage from '../images/traveljournal/Edititem.jpg'
import travelJournalEditImage from '../images/traveljournal/Editpage.jpg'
import travelJournalMapImage from '../images/traveljournal/MapPage.jpg'
import travelJournalMapDetailImage from '../images/traveljournal/MapPage2.jpg'
import travelJournalPhotoImage from '../images/traveljournal/Photopage.jpg'
import travelJournalPlannedTripsImage from '../images/traveljournal/PlannedTripsPage.jpg'
import travelJournalPlanTripImage from '../images/traveljournal/Plantrippage.jpg'
import stoxlyImage from '../images/stoxly/Stoxly.png'
import stoxlyPortfolioImage from '../images/stoxly/Portfoliopage.png'
import stoxlySingleStockImage from '../images/stoxly/SingleStockpage.png'
import stoxlyStocksImage from '../images/stoxly/Stockspage.png'
import mintLeafImage from '../images/mintleaf/Homescreen.jpg'
import mintLeafAddTransactionImage from '../images/mintleaf/AddtransactionPage.jpg'
import mintLeafBudgetOverviewImage from '../images/mintleaf/BudgetOverview.jpg'
import mintLeafCategoryBreakdownImage from '../images/mintleaf/Categorybreakdown.jpg'
import mintLeafMonthlyReportImage from '../images/mintleaf/MonthlyReportPage.jpg'
import mintLeafMonthlyTransactionsImage from '../images/mintleaf/MonthlyTransactionsPage.jpg'
import mintLeafSettingsImage from '../images/mintleaf/SettingsView.jpg'
import mintLeafLoginImage from '../images/mintleaf/loginPage.jpg'

export type ProjectImage = {
  src: string
  label: string
  explanation: string
}

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  stack: string[]
  projectType: string
  year: string
  liveUrl: string
  repoUrl: string
  idea: string
  details: string
  gallery: ProjectImage[]
}

export const projects: readonly [Project, Project, Project, Project, Project] = [
  {
    slug: 'Stoxly',
    title: 'Stock tracker - Stoxly',
    description:
      'Stock tracker where users can simulate their own stock transactions in their portfolio and check real-time American stock prices.',
    image: stoxlyImage,
    stack: ['Next.js', 'Postgres', 'PrismaDB'],
    projectType: 'Full stack project',
    year: '2025',
    liveUrl: '#',
    repoUrl: '#',
    idea:
      'Stoxly turns a stock watchlist into a safe space for learning. The interface gives users a clear overview of their virtual portfolio while keeping the experience focused on decisions rather than noise.',
    details:
      'The screens show a full flow from browsing available stocks to opening a detailed quote and reviewing the resulting portfolio. PrismaDB and Postgres support the persistent portfolio data, while Next.js brings the dashboard and transaction flow together.',
    gallery: [
      { src: stoxlyImage, label: 'Dashboard', explanation: 'The landing dashboard introduces the virtual portfolio and the main market overview.' },
      { src: stoxlyStocksImage, label: 'Stocks', explanation: 'The stocks view makes it easy to scan available companies before choosing one to research.' },
      { src: stoxlySingleStockImage, label: 'Single stock', explanation: 'A focused stock page gives the user the information needed to simulate a considered transaction.' },
      { src: stoxlyPortfolioImage, label: 'Portfolio', explanation: 'The portfolio page brings simulated holdings and performance into one readable summary.' },
    ],
  },
  {
    slug: 'Drunk Driving',
    title: 'Drunk driving simulator',
    description:
      'Simulation game where player can simulate drunk driving in an abstract environment.',
    image: drunkDrivingImage,
    stack: ['Unity', 'HTML', 'CSS'],
    projectType: 'Gaming project',
    year: '2023',
    liveUrl: '#',
    repoUrl: '#',
    idea:
      'This simulator makes the consequences of drunk driving tangible through an abstract, playable environment. Instead of presenting the subject as a lecture, it lets the player experience how focus and reaction change.',
    details:
      'The Unity views show the game from both the player HUD and the scene-building perspective. Traffic lights, road elements, and the surrounding environment establish a familiar setting that makes the altered driving experience easier to understand.',
    gallery: [
      { src: drunkDrivingImage, label: 'Player HUD', explanation: 'The in-game HUD keeps the driving state and key feedback visible while the player is moving.' },
      { src: drunkDrivingUnityImage, label: 'Unity gameplay view', explanation: 'The Unity view shows how the playable road scene is assembled around the driving challenge.' },
      { src: drunkDrivingEnvironmentImage, label: 'Environment', explanation: 'The environment gives the simulation a recognizable setting instead of reducing it to an abstract test.' },
      { src: drunkDrivingTrafficLightsImage, label: 'Traffic lights', explanation: 'Traffic lights add a familiar decision point where impaired reactions become part of the challenge.' },
    ],
  },
  {
    slug: 'Budget Tracker',
    title: 'Budget Tracker - MintLeaf',
    description: 'Tracker app where the user can track and set budgets for each month.',
    image: mintLeafImage,
    stack: ['Kotlin', 'Jetpack Compose', 'RoomDB'],
    projectType: 'Mobile app',
    year: '2025',
    liveUrl: '#',
    repoUrl: '#',
    idea:
      'MintLeaf is designed around the small, repeatable actions that make budgeting useful: adding a transaction, assigning a category, and checking progress against a monthly limit.',
    details:
      'The mobile screens move from a calm overview into detailed reports and transaction lists. RoomDB keeps the data available on-device, while Jetpack Compose makes the forms, charts, and settings feel like one consistent Android experience.',
    gallery: [
      { src: mintLeafImage, label: 'Home screen', explanation: 'The home screen gives an immediate read on the current month and its remaining budget.' },
      { src: mintLeafAddTransactionImage, label: 'Add transaction', explanation: 'The transaction form is kept direct so recording an expense takes only a few intentional inputs.' },
      { src: mintLeafBudgetOverviewImage, label: 'Budget overview', explanation: 'The overview compares planned budgets with actual spending across the month.' },
      { src: mintLeafCategoryBreakdownImage, label: 'Category breakdown', explanation: 'Category totals turn a list of expenses into a quick picture of spending habits.' },
      { src: mintLeafMonthlyReportImage, label: 'Monthly report', explanation: 'The monthly report helps the user reflect on the full period rather than a single purchase.' },
      { src: mintLeafMonthlyTransactionsImage, label: 'Monthly transactions', explanation: 'The transaction list provides a detailed, chronological record behind the summary numbers.' },
      { src: mintLeafSettingsImage, label: 'Settings', explanation: 'Settings keep account and app preferences accessible without interrupting the budgeting flow.' },
      { src: mintLeafLoginImage, label: 'Login', explanation: 'The login screen provides the entry point for a personal budgeting space.' },
    ],
  },
  {
    slug: 'Pokedex',
    title: 'Pokedex',
    description: 'Compact website where the user can view stats of pokémon and set favorites.',
    image: pokedexImage,
    stack: ['Vue', 'Tailwind', 'Typescript'],
    projectType: 'Front-end web app',
    year: '2025',
    liveUrl: '#',
    repoUrl: '#',
    idea:
      'The Pokedex keeps a large amount of character data approachable by putting search, visual recognition, and useful stats in the same compact interface.',
    details:
      'Vue and TypeScript provide a responsive front-end structure, while Tailwind keeps the visual language consistent across the collection and favorites views. The result is quick to browse without losing the playful feel of the subject.',
    gallery: [
      { src: pokedexImage, label: 'Pokedex home', explanation: 'The home screen presents the collection as a visual index that is easy to scan and explore.' },
      { src: pokedexFavoritesImage, label: 'Favorites', explanation: 'The favorites view lets users create a personal shortlist from the wider Pokedex.' },
    ],
  },
  {
    slug: 'Travel Journal',
    title: 'Travel Journal',
    description:
      'Compact but easy to use travel journal to record all your recent travel experiences in photo albums.',
    image: travelJournalImage,
    stack: ['.NET', 'FirebaseDB'],
    projectType: 'Mobile app',
    year: '2024',
    liveUrl: '#',
    repoUrl: '#',
    idea:
      'Travel Journal gives memories a structure without making them feel like paperwork. Trips, places, checklists, and photos live together so the record is useful both before and after travelling.',
    details:
      'The screens cover the complete journey: planning a trip, checking items off, locating places on a map, and adding photos afterward. FirebaseDB supports the shared travel data while the .NET app keeps each step connected.',
    gallery: [
      { src: travelJournalImage, label: 'Home screen', explanation: 'The home screen gathers recent and planned journeys into an inviting starting point.' },
      { src: travelJournalAppLogoImage, label: 'App identity', explanation: 'The app identity sets a warm, personal tone for an experience built around memories.' },
      { src: travelJournalAddTripImage, label: 'Add trip', explanation: 'The add-trip flow gives a new journey the basic context it needs before details are added.' },
      { src: travelJournalPlanTripImage, label: 'Plan trip', explanation: 'Planning tools help turn a destination into a practical itinerary.' },
      { src: travelJournalPlannedTripsImage, label: 'Planned trips', explanation: 'Planned trips keeps upcoming travel visible and easy to revisit.' },
      { src: travelJournalChecklistImage, label: 'Checklist', explanation: 'The checklist supports the practical preparation that happens before departure.' },
      { src: travelJournalMapImage, label: 'Map', explanation: 'The map view gives the journal a sense of place and makes saved locations discoverable.' },
      { src: travelJournalMapDetailImage, label: 'Map detail', explanation: 'A closer map view provides more context around the selected travel location.' },
      { src: travelJournalPhotoImage, label: 'Photo page', explanation: 'The photo page turns a trip record into a visual memory rather than only a list of notes.' },
      { src: travelJournalEditImage, label: 'Edit trip', explanation: 'Editing keeps the journal flexible when plans or memories change after the first entry.' },
      { src: travelJournalEditItemImage, label: 'Edit item', explanation: 'Individual items can be refined without requiring the user to rebuild an entire trip.' },
    ],
  },
]

export const contactEmail = 'david.geuchenmeier@gmail.com'
