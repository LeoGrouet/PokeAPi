<?php

namespace Infrastructure\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SignInController extends AbstractController

{
  #[Route('/signin', name: 'app_signin', methods: ['GET', 'POST'])]
  public function index(Request $request): Response
  {
    dump($request);
    return $this->render(
      $request
    );
  }
}
