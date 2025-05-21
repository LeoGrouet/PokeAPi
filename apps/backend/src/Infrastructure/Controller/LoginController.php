<?php

namespace Infrastructure\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LoginController extends AbstractController
{
  #[Route('/login', name: 'app_login', methods: ['GET', 'POST'])]
  public function index(): Response
  {
    return $this->render(
      "coucou"
    );
  }
}
