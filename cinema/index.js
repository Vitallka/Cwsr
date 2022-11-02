'use strict'

const express = require('express')
var cors = require('cors')

//добавляю к консольному выводу дату и время
function console_log(fmt, ...aparams){
  fmt = (new Date()).toJSON().substr(0, 19)+' '+fmt
  console.log(fmt, ...aparams)
}

// создание экземпляра http-сервера
const app = express()

// метод .use задает команды, которые будут выполнены до разбора GET/POST команд

// декодирует параметры запроса
app.use( express.urlencoded() )
app.use( express.json() )

app.use('/up/images', cors(), express.static(__dirname +'/images') )
app.use('/swagger', cors(), express.static(__dirname +'/swagger') )

// логгирую все входящие запросы
app.use((req, res, next)=>{
  console_log('[express] %s %s request from %s, body: %s', req.method, req.path, req.ip, JSON.stringify(req.body))
  next()
})

const registeredUsers = []
const movies = [
  {movieId: 1, name: 'Дюна', description: 'Атрейдесы прибывают на планету, где им никто не рад. Фантастический эпос Дени Вильнёва с шестью «Оскарами»', age: "12", images: [], poster: 'duna.webp', tags: [], filters: ['new','inTrend','forMe']},
  {movieId: 2, name: 'Легенда о Зелёном Рыцаре', description: 'Наследник короля принимает вызов таинственного рыцаря. Захватывающее фэнтези по мотивам средневековой поэмы', age: "18", images: [], poster: 'green.webp', tags: [], filters: ['new','inTrend','forMe']},
  {movieId: 3, name: 'Главный герой', age: "16", images: [], poster: 'maincharacter.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'Парень по имени Парень счастлив. Он живет в лучшем в мире городе Городе, работает на лучшей в мире работе в Банке и дружит с охранником по имени Приятель. И его совершенно не волнует, что Банк грабят по нескольку раз на дню, а улицы Города напоминают зону военных действий. Единственное, чего Парню не хватает для полного счастья — идеальной девушки, к которой у него имеется точный список требований. И вот однажды он видит на улице красотку, точь-в-точь как в его мечтах. Эта встреча изменит не только нашего главного героя, но и перевернёт весь известный ему мир.'},
  {movieId: 4, name: 'Петр I: Последний царь и первый император', age: "12", images: [], poster: 'Petr1.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'Фигура императора Петра Великого, как и эпоха его становления и правления, до сих пор будоражит умы людей во всем мире. Создатели отвечают на вопросы, как занять престол, когда ты — четырнадцатый ребенок в семье; как отвоевать выход к морю, когда в стране нет профессиональной армии и флота; как за несколько десятилетий вывести в мировые лидеры страну, с которой раньше никто не считался и многие другие.'},
  {movieId: 5, name: 'Либерея: Охотники за сокровищами', age: "12", images: [], poster: 'Liberia.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'При строительстве столичного метро рабочие обнаруживают драгоценный оклад, который доказывает — легендарная Библиотека Ивана Грозного существует! Но находка оказывается забыта на долгие годы, и уже в наше время попадает в руки ни о чем не подозревающего Ильи. Теперь его жизнь в опасности, ведь за старинным артефактом начинают охоту могущественные силы! Парень вынужден объединиться со странным незнакомцем, который утверждает, что оклад — это ключ к обнаружению Библиотеки. Помочь им в поисках и разгадать древние шифры берется красотка-филолог Арина. Теперь, чтобы обрести новые ключи-подсказки и приблизиться к разгадке, трио авантюристов нужно побывать в затерянных и опасных местах, разбросанных по всей России: от Вологды до Нарьян-Мара, на суше, под водой и даже в тайных подземельях Кремля.'},
  {movieId: 6, name: 'Грозный папа', age: '6', images: [], poster: 'formidableDad.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'Поссорившись с сыном, царь Иван Грозный случайно ранит его – как на знаменитой картине Репина. Жизнь царевича на волоске. Чтобы все исправить, Грозный хочет отправиться в прошлое с помощью волшебного гримуара. Однако что-то пошло не так, и Грозный попадает в наше время, где знакомится с семьей Осиповых. Никита Осипов – неудачливый археолог и такой же неудачливый отец. Он давно потерял контакт с детьми – Ромкой и Полей. Но теперь они вместе отправляются в путешествие, чтобы помочь Грозному отыскать гримуар и спасти царевича.'},
  {movieId: 7, name: 'Сердце пармы', age: '16', images: [], poster: 'Heart.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'Русский князь Михаил и юная Тиче — дети разных народов, разных миров и разных богов. Любовь молодого воителя и ведьмы-ламии кажется невозможной, но преодолевает все запреты, запуская маховик рока. Отныне только от Михаила зависит будущее родной пармы, древних суровых земель, напоенных чудодейственной мощью кровавых языческих богов. Здесь сталкиваются герои и призраки, князья и шаманы, вогулы и московиты. Здесь расстаться с жизнью — не так страшно, как выбрать между долгом, верностью братству и любовью к единственной женщине на свете.'},
  {movieId: 8, name: 'Большое путешествие. Специальная доставка', age: '6', images: [], poster: 'bigAdventure.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'Прошло время с тех пор, как заяц Оскар и медведь Мик-Мик в компании своих друзей вернули домой маленького панду. С тех пор жили они спокойно и размеренно. Мик-Мик заботился о своих пчелах, а Оскар организовал в лесу американские горки. И вот однажды к берегу Мик-Мика прибивает корзину с малышом гризли. Кто-то снова перепутал адреса, а разбираться с этим придется Мик-Мику и Оскару. В компании друзей они отправляются в новое путешествие — теперь, чтобы вернуть домой малыша гризли.'},
  {movieId: 9, name: 'Шрамы Парижа', age: '18', images: [], poster: 'scars.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'В ноябре 2015 года Париж пережил самые страшные теракты в своей истории. Жертвами тщательно спланированных актов насилия стали почти 400 человек. Но на этом преступники не собирались останавливаться. Чтобы предотвратить будущие угрозы, двум агентам придется провести одно из самых крупных расследований в истории Старого Света и помешать преступникам нанести новый удар. Теперь в опасности не только Франция, но и вся Европа.'},
  {movieId: 10, name: 'Паранормальные явления. Дом призраков', age: '16', images: [], poster: 'Paranormal.webp', tags: [], filters: ['new','inTrend','forMe'], description: 'Когда-то Шон был популярным видеоблогером, сделавшим имя на экстремальных роликах, в которых он бросал вызов собственным страхам, но однажды вляпался в скандал и потерял всех спонсоров. Записав видео с извинениями и снова получив финансирование, парень возвращается с новым леденящим душу проектом. Шон собирается провести ночной стрим из дома с привидениями, где более 100 лет назад повесилась одинокая женщина, а после неоднократно фиксировалась паранормальная активность.'}
]

function findUserByEmail(email) {
  for (let i = 0; i < registeredUsers.length; i++) {
    if (registeredUsers[i].email == email) 
      return registeredUsers[i]
  }
  return null
}

function findUserByToken(token) {
  for (let i = 0; i < registeredUsers.length; i++) {
    if (registeredUsers[i].token == token) 
      return registeredUsers[i]
  }
  return null
}

app.options('/auth/register', cors())
app.post('/auth/register', cors(), (req,res)=>{
  try {
    if(req.body.email==undefined) 
      throw new Error('Not found "email" param')

    if(req.body.password==undefined) 
      throw new Error('Not found "password" param')

    if(req.body.firstName==undefined) 
      throw new Error('Not found "firstName" param')

    if(req.body.lastName==undefined) 
      throw new Error('Not found "lastName" param')

    const re = new RegExp(`^[a-z0-9]+@[a-z0-9]+\.[a-z]{1,3}$`)
    if (!re.test(req.body.email))
      throw new Error('Param "email" don`t match template')

    let user = findUserByEmail(req.body.email)
    if (user == null) {
      let user = null
      let token = null
      do {
        token = Math.ceil(Math.random() * 999998)
        user = findUserByToken(token)
      } while (user != null);
      registeredUsers.push({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        token: token
      })
    }

    res.status(201)
  } catch (error) {
    res.statusMessage = error.message
    res.status(400)
  }
  res.end()
})

app.options('/auth/login', cors())
app.post('/auth/login', cors(), (req,res)=>{
  try {
    if(req.body.email==undefined) 
      throw new Error('Not found "email" param')

    if(req.body.password==undefined) 
      throw new Error('Not found "password" param')

    let user = findUserByEmail(req.body.email)
    if (user == null) res.status(404)
    else {
      if (user.password != req.body.password)
        throw new Error('Wrong password')
      res.json({token: user.token})
    }
  } catch (error) {
    res.statusMessage = error.message
    res.status(400)
  }
  res.end()
})

function checkAuth(req){
  if(req.headers.authorization==undefined) 
    throw new Error('No Authorization header')

  let parts = req.headers.authorization.split(' ')
  if (parts.length == 2) {
    if (parts[0] == 'Bearer') {
      let user = findUserByToken(parts[1])
      if (user == null)
        throw new Error('User not found')
    } else
      throw new Error('Unsupported Authorization method')
  } else
    throw new Error('Bad Authorization content')
}

app.options('/movies', cors())
app.get('/movies', cors(), (req,res)=>{
  try {
    if (typeof req.query.filter == 'undefined')
      throw new Error('Filter is required parameter')

    // checkAuth(req)

    let filtered = movies
      .filter(m => m.filters.includes(req.query.filter))
    let mapped = filtered.map(m => {
      return {
        movieId: m.movieId, 
        name: m.name,
        description: m.description,
        age: m.age, 
        images: m.images, 
        poster: m.poster, 
        tags: m.tags
      }
    })
    res.json(mapped)
  } catch (error) {
    res.statusMessage = error.message
    res.status(400)
  }
  res.end()
})

// запуск сервера на порту 8080
app.listen(3019, '0.0.0.0', ()=>{
    console_log('HTTP сервер успешно запущен на порту 3019')
}).on('error', (err)=>{
    console_log('ошибка запуска HTTP сервера: %s', err)
})