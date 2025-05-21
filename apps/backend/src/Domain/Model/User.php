<?php

declare(strict_types=1);

namespace Domain\Model;

use DateTimeImmutable;

class User
{
  private string $id;
  private string $username;
  private string $email;
  private string $password;
  private DateTimeImmutable $createdAt;
  private DateTimeImmutable $updatedAt;

  public function __construct(
    string $id,
    string $username,
    string $email,
    string $password,
    DateTimeImmutable $createdAt,
    DateTimeImmutable $updatedAt
  ) {
    $this->id = $id;
    $this->username = $username;
    $this->email = $email;
    $this->password = $password;
    $this->createdAt = $createdAt;
    $this->updatedAt = $updatedAt;
  }

  public function getId(): string
  {
    return $this->id;
  }

  public function getUsername(): string
  {
    return $this->username;
  }

  public function getEmail(): string
  {
    return $this->email;
  }

  public function getCreatedAt(): DateTimeImmutable
  {
    return $this->createdAt;
  }

  public function getUpdatedAt(): DateTimeImmutable
  {
    return $this->updatedAt;
  }
}
