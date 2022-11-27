class GitHub{
   constructor() {
      this.client_id = 'd02d24c50b8a3fc9ce4a';
      this.client_secret = '460e13fc8164a2868924334527cfa5468a952264';
      this.repos_count = 5;
      this.repos_sort = 'created: asc'
   }

   // create a GetUser options with Async...
   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();

      const repos = await repoResponse.json();

      return {
         profile,
         repos
         // profile here means profile: profile
      }
   }
}