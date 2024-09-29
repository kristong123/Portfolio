# Song Manager API Documentation
This API handles the song recommendations on my portfolio. 

## Get Random Song
**Request Format:** `/api/song`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns a random song from the collection

**Example Request:** `GET /api/song`

**Example Response:**
```json
{
    {
        "title": "Bitter Pill",
        "artist": "Christian Kuria",
        "img": "https://i.scdn.co/image/ab67616d0000b2735d9f44aad41cfdf90f4d039a"
    }
}
```

**Error Handling:**
500 error if there is a server error while fetching the song


## Get All Songs
**Request Format:** `/api/songs`

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Returns all the songs from the collection

**Example Request:** `GET /api/songs`

**Example Response:**
```json
{
    {
        "title": "Bitter Pill",
        "artist": "Christian Kuria",
        "img": "https://i.scdn.co/image/ab67616d0000b2735d9f44aad41cfdf90f4d039a"
    },
    {
        "title": "Over the Moon",
        "artist": "The Marias",
        "img": "https://i.scdn.co/image/ab67616d0000b273a64b06c0eb30ce15c3e6edc1"
    }
}
```

**Error Handling:**
500 error if there is a server error while fetching the songs


## Make Song Recommendation
**Request Format:** `/api/recommendations`

**Request Type:** POST

**Returned Data Format**: Plain Text

**Description:** Adds a new song to the recommendations

**Example Request:** `POST /api/recommendations`

**Example Response:**
```
Recommendation successfully made
``

**Error Handling:**
400 error if the song information is missing the request
500 error if there is a server error while fetching the song