
type Character = {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

type Location = {
    name: string;
    url:  string;
}


type Info = {
    count:  number;
    pages:  number;
    next:   string;
    prev:   string;
}