// je veux un type qui correspondra aux événement pour la page Event.tsx
export interface Organizer {
    name: string;
    imageUrl: string;
}

export interface Event {
    id: number; // Identifiant unique de l'événement
    title: string; // Titre de l'événement 
    date: string; // Date de l'événement au format ISO 8601 (YYYY-MM-DD)
    description: string; // Description de l'événement
    location: string; // Lieu de l'événement
    attendees: number; // Nombre d'inscrits à l'événement
    organizer: Organizer; // Organisateur de l'événement
}