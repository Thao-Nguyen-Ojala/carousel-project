export interface RestaurantSection {
    title: string;
    restaurants: {
        blurhash: string;
        launch_date: string;
        location: number[];
        name: string;
        online: boolean;
        popularity: number;
    }[];
}