import Swal from "sweetalert2";

export function SuccessAlert() {
 return Swal.fire({
    icon: undefined,
    html: `
      <p class="swal-tag">— Demande reçue</p>
      <div>
        <h2 class="swal-title">Merci pour</h2>
        <h2 class="swal-title">votre confiance</h2>
      </div>
      <div class="swal-divider"></div>
      <p class="swal-body">
        J'ai bien reçu votre demande et vous remercie pour l'intérêt que vous portez à mon travail.
      </p>
      <p class="swal-body">
        Je prends le temps de découvrir votre projet avec attention et je reviendrai vers vous très prochainement.
      </p>
    `,
    showCloseButton: true,
    confirmButtonText: "À bientôt !",
    buttonsStyling: false,

    customClass: {
      popup: "swal-container",
      confirmButton:
        "swal-button"
    }
  });
}