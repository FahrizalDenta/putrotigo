comments = [
    {
        "commentId": 1,
        "commentContent": 'Hai',
        "replies": [
            {
                "commentId": 11,
                "commentContent": 'Hai juga',
                "replies": [
                    {"commentId": 111, "commentContent": 'Haai juga hai jugaa'},
                    {"commentId": 112, "commentContent": 'Haai juga hai jugaa'}
                ]
            },
            {
                "commentId": 12,
                "commentContent": 'Hai juga',
                "replies": [
                    {"commentId": 121, "commentContent": 'Haai juga hai jugaa'}
                ]
            }
        ]
    },
    {
        "commentId": 2,
        "commentContent": 'Halooo'
    }
]

def count_comments(data):
    total = 0
    for comment in data:
        # Hitung komentar saat ini
        total += 1
        # Jika ada balasan, hitung secara rekursif
        if "replies" in comment and comment["replies"]:
            total += count_comments(comment["replies"])
    return total

if __name__ == "__main__":
    result = count_comments(comments)
    print(f"Total Komentar: {result}")