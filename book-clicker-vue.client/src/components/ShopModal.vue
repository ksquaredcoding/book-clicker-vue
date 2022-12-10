<template>
  <div class="modal fade" id="shopModal" tabindex="-1" aria-labelledby="shopModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row animate_animated animate_fadeIn">
            <div class="col-lg-4">
              <img class="img-fluid rounded" :src="keep?.img" :alt="keep?.name">
            </div>
            <div class="col-lg-8 d-flex flex-column justify-content-between">
              <div class="d-flex justify-content-center">
                <p class="mx-2 fs-5"><i class="mdi mdi-eye-outline"></i> {{ keep?.views }}</p>
                <p class="mx-2 fs-5"><i class="mdi mdi-alpha-k-box-outline"></i> {{ keep?.kept }}</p>
              </div>
              <div class="row justify-content-center">
                <div>
                  <h1 class="text-center">{{ keep?.name }}</h1>
                </div>
                <div class="d-flex justify-content-center">
                  <p>{{ keep?.description }}</p>
                </div>
              </div>
              <div class="d-flex justify-content-between">
                <div v-if="activeVault?.creatorId == account?.id && route.name == 'Vault'">
                  <button class="btn" @click="removeVaultKeep(keep?.id)"><i class="mdi mdi-delete-circle"></i>
                    Remove</button>
                </div>
                <div v-else-if="keep?.creatorId == account?.id && route.name == 'Account'">
                  <button class="btn" @click="removeMyKeep(keep?.id)"><i class="mdi mdi-delete-circle"></i>
                    Remove</button>
                </div>
                <div class="d-flex" v-else-if="account.id">
                  <form @submit.prevent="handleSubmit">
                    <p><b>Add To Vault</b></p>
                    <select class="btn border-0 fw-bold me-2" name="vaultId" aria-label="Select a vault to save keep to"
                      v-model="editable.vaultId">
                      <option :value="v.id" v-for="v in vaults" :key="v.id"
                        :class="vaultKeeps.find(k => k.vaultId == v.id && k.keepId == keep?.id) ? 'text-danger' : ''">{{
                            v.name
                        }}</option>
                    </select>
                    <button class="btn btn-dark ms-2" style="height: fit-content;">save</button>
                  </form>
                </div>
                <div class="d-flex align-items-center">
                  <router-link :to="{ name: 'Profile', params: { id: keep?.creator?.id } }">
                    <img class="creator-pic mx-1" :src="keep?.creator?.picture" :alt="keep?.creator?.name"
                      :title="keep?.creator?.name" data-bs-dismiss="modal">
                  </router-link>
                  <p class="mx-1 mt-2"><strong>{{ keep?.creator?.name }}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- TODO take out keepr related things and build out modal for shop -->
<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>