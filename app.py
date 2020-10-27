from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///cards.db'
db = SQLAlchemy(app)


class BingoCard(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(50))
    content = db.Column(db.Text)


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "GET":
        all_cards = BingoCard.query.all()
        card_id = request.form["id_dl"]
        return all_cards[card_id - 1]

    elif request.method == "POST":
        card_title = request.form["title"]
        old_card = BingoCard.query.filter_by(
            card_title='title')
        old_card_content = old_card.content
        new_card_content = request.content["content"] + old_card_content
        new_card = BingoCard(title=card_title, content=new_card_content)
        db.delete(old_card)
        db.session.ad(new_card)
        db.commit()


if __name__ == '__main__':
    app.run(debug=True)
