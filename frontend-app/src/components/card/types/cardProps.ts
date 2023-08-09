type Characteristics = {
    title: string;
    description: string;
};

export interface CardProps {
    title: string;
    characteristics: Characteristics[];
    image: string;
}
