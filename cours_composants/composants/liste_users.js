const liste_users = {
    template: `<h2 :class="margin_top">{{ titre }}</h2>
    <section style="display:flex;" class="mt-4">
        <div class="card" style="width: 18rem;" v-for="user in listusers">
            <div class="card-body">
                <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
                <p class="card-text">{{ user.location.city }}</p>
            </div>
        </div>
    </section>`,
    props:['listusers','titre', 'margin_top']
}