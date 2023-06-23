import { fetchWeather } from "./modules/APIservice.js";
import { sityServiceSearch } from "./modules/sityServiceSearch.js";
import { startWidget } from "./modules/widgetService.js";

const initWidget = async (app) => {
    const widget = await startWidget();
    app.append(widget);

    sityServiceSearch(widget);
};

initWidget(document.querySelector('#app'));